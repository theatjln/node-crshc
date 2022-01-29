const fs = require('fs')

// streams for large data files

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'})
const writeStream = fs.createWriteStream('./docs/blog4.txt')

// readStream.on('data', (chunk) => {
//   console.log('\n----NEW CHUNK----\n')
//   console.log(chunk)
//   writeStream.write("\n NEW CHUNK \n");
//   writeStream.write(chunk)
// })

// piping - short for all of the above code from // readStream.on('data', (chunk) => {
readStream.pipe(writeStream)