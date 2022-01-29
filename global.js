setTimeout(() => {
  console.log('in the timeout')
  clearInterval(interval)
}, 3000)
 
const interval = setInterval(() => { 
  console.log('in the interval') 
}, 1000)

console.log(__dirname); //absolute path of directory we are in
console.log(__filename); //absolute path with filename of directory we are in