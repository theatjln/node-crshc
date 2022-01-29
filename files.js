const fs = require('fs')

// // reading files - readFile() is async function / non blocking function
// fs.readFile('./docs/blog1.txt', (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   // console.log(data) //will print buffer
//   console.log(data.toString()) //will print the string contents
// })

// // writing files
// fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
//   console.log('written successfully')
// })

// fs.writeFile("./docs/blog2.txt", "hello, world", () => {
//   // to create non-existent file using writeFile
//   console.log("written successfully");
// });

// directories 
// if (!fs.existsSync('./assets')) {
//   fs.mkdir("./assets", (err) => {
//     // creating directory
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder created!");
//   });
// } else {
//   fs.rmdir('./assets', (err) => {
//     if (err) {
//       console.log(err)
//     }
//     console.log('folder deleted!')
//   })
// }

// deleting files
if(fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', err => {
    if(err) {
      console.log(err)
    }
    console.log('file deleted!')
  })
}
