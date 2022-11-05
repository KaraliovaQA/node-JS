// Модуль событий (Event Module)

// // const EventEmitter = require('events');
// const Logger = require('./log');
// const logger = new Logger();
// // const emitter = new EventEmitter;

// // emitter.on('some_event', (text) => {
// //    console.log(text);
// // });

// // emitter.emit('some_event', 'Event test text!');
// // ------------Event text text!

// logger.on('some_event', (args) => {
//    const { id, text } = args;
//    console.log(id, text);
// });

// logger('User logged!'); 

// emitter.emit('some_event', { id: 5, text: 'Event test text!'});
// ------------5 Event test text!

const Logger = require('./log');

const logger = new Logger();

logger.on('some_event', (args) => {
  const { id, text } = args;
  console.log(id, text);
});

logger.log('User Logged!');