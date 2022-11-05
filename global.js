// console.log(global);

// setTimeout(() => {
//    console.log('Hello!');
// }, 2000);

// console.log(__dirname);
// C:\Users\ADMIN\node-JS

// console.log(__filename);
// C:\Users\ADMIN\node-JS\global.js

// console.log(process);

const url = new URL("https://webDev.com/path/name#test");
console.log(url.hostname);
console.log(url.href);
console.log(url.pathname);
console.log(url.hash);

// webdev.com
// https://webdev.com/path/name#test
// /path/name
// #test