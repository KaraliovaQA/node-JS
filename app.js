// -----4---- Node.js и файловая система (Node.js & File System)


const fs = require('fs');

// fs.readFile('./test.txt', (error, data) => {
//    console.log(data.toString());
// });
// Всех приветствую в курсе «Node.js».
// В данном видеокурсе мы с вами рассмотрим Node.js, серверную технологию которая позволяет исполнять код написанный на JavaScript вне браузера.


// fs.readFile('./test.txt', 'utf8', (error, data) => {
//    console.log(data);
// });
// Всех приветствую в курсе «Node.js».
// В данном видеокурсе мы с вами рассмотрим Node.js, серверную технологию которая позволяет исполнять код написанный на JavaScript вне браузера.


fs.readFile("./test.txt", 'utf-8', (error, data) => {

   fs.mkdirSync("./files", () => {});
 
   fs.writeFileSync("./files/test2.txt", `${data}New text!`, (error) => {
     error ? console.log(error) : null;
   });
 
 });

 setTimeout(() => {
   if (fs.existsSync("./files/test2.txt")) {
     fs.unlink("./files/test2.txt", () => {});
   }
 }, 4000);
 setTimeout(() => {
   if (fs.existsSync("./files")) {
   fs.rmdir("./files", () => {});
   }
 }, 6000);