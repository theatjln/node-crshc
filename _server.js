// for expressJS, use app instead of this file

const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method);

  // LODASH
  // const num = _.random(0,20) //returns a random number from 0 to 20
  // console.log(num)
  // const greet = _.once(() => {
  //   //executes a function only once no matter how many times called
  //   console.log("hello")
  // }) 
  // greet();
  // greet();

  // SET HEADER CONTENT TYPE (via plain text)
  // res.setHeader('Content-Type', 'text/plain')
  // res.write('hello, ninjas')
  // res.end()

  // SET HEADER CONTENT TYPE (via html)
  // res.setHeader("Content-Type", "text/html");
  // res.write("<head><link rel='stylesheet' href='#'></head>");
  // res.write("<p>hello, ninjas</p>");
  // res.write("<p>hello again, ninjas</p>");
  // res.end();

  // TO SET STATUS CODE - res.statusCode = 404

  // REDIRECTS 
  //  res.setHeader("Location", "/about");
  //  res.end();

  res.setHeader("Content-Type", "text/html");

  let path = "./views/old_code_for_views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me": 
      res.statusCode = 301;
      res.setHeader('Location', '/about')
      res.end()
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data) //use write when passing multiple things
      // res.end()

      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});

// STATUS CODES
// 200 - OK
// 301 - Resource moved
// 404 - Not Found
// 500 - Internal server error

// STATUS CODE RANGES
// 100 Range - informational responses
// 200 Range - success codes
// 300 Range - codes for redirects
// 400 Range - user or client error codes
// 500 Range - server error codes
