/// THIS FILE IS USING EXPRESS BACKEND JS FRAMEWORK

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes"); //IMPORTING blogRoutes

// EXPRESS APP
const app = express();

// CONNECT TO MONGODB using MONGOOSE
const dbURI =
  "mongodb+srv://liztcai:test1234@cluster0.gj5hv.mongodb.net/node-tuts?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(3000);
    //only listens for requests when db connection is established
    console.log("connected to the db\nnow listening for requests at port 3000");
  })
  .catch((err) => console.log(err));
// add {useNewUrlParser: true, useUnifiedTopology: true} as 2nd parameter for mongoose.connect() to AVOID DEPRECATION WARNINGS
// mongoose.connect() is an async function

// REGISTER VIEW ENGINE, TO HELP DISPLAYING DYNAMIC CONTENTS
// app.set('views', 'myviews') //explicitly naming views
app.set("view engine", "ejs"); //automatically looking to ./views directory

// LISTEN FOR REQUESTS
// app.listen(3000);

// MIDDLEWARE
// next - is an express function that will tell express that it is finished inside the middleware
// app.use((req, res, next) => {
//   console.log("new request made:");
//   console.log("host: ", req.hostname);
//   console.log("path: ", req.path);
//   console.log("method: ", req.method);
//   next()
// })

// app.use((req, res, next) => {
//   console.log("in the next middleware");
//   next();
// });

// MIDDLEWARE & STATIC FILES
// public is the directory where u put static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); //to accept form data

// INVOKING LOGGER MIDDLEWARE - MORGAN
app.use(morgan("dev"));
// app.use(morgan("tiny"));

// MONGOOSE AND MONGO SANDBOX ROUTES
// ADDING A BLOG TO THE DATABASE
// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "new blog2",
//     snippet: "about my new blog2",
//     body: "more about my new blog2",
//   });

//   blog
//     .save()
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err));
// });

// // RETRIEVING BLOGS FROM THE DATABASE
// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err));
// });

// // RETRIEVING A SINGLE BLOG FROM THE DATABASE
// app.get("/single-blog", (req, res) => {
//   Blog.findById("61f2c0bea88bfdd11928c8a2")
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err));
// });

/// OFFICIAL SITE ROUTES
// TO RESPOND TO REQUESTS
app.get("/", (req, res) => {
  // responding to localhost:3000/

  // res.send - AUTOMATICALLY SET HEADERS, AND DISPLAY RESPONSE IN THE BROWSER
  // res.send('<p>Welcome to homepage!</p>')

  // AUTOMATICALLY SET HEADERS, AND DISPLAY 'FILE' RESPONSE IN THE BROWSER
  // res.sendFile('./views/index.html', {root: __dirname})

  // RENDERS A VIEW FILE
  // res.render('index')

  // second parameter of res.render is data to be passed to the view page
  // const blogs = [];
  // const blogs = [
  //   {
  //     title: "Yoshi finds eggs",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     title: "Mario finds stars",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     title: "How to defeat bowser",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  // ];
  // res.render("index", { title: "Home", blogs });

  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  // res.sendFile("./views/old_code_for_views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

// BLOG ROUTES
app.use("/blogs", blogRoutes);

// REDIRECTS
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 PAGE
// app.use() fires for every single request. to use in 404, must be at the bottom of the code
// res.status(404) - just chain the status code 404 for indication of 404 response
app.use((req, res) => {
  // res.status(404).sendFile("./views/old_code_for_views/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});
