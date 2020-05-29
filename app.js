// VALIDATOR.
// require("") is from node_modules if node_modules being delete will return error when run command.
// const validator = require("validator");
// const getNotes = require("./notes.js");
// const msg = getNotes();
// console.log(msg);

// this will return false.
// console.log(validator.isURL("https/mead.io"));
// this is the true.
// console.log(validator.isURL("https://mead.io"));
// this email return true.
// console.log(validator.isEmail("julia@mail.com"));
// clean terminal using ctrl + L.
// run the app.js using command (node app.js).

// CHALK.
// chalk is more popular than validator and allows to customize how text gets printed to the console when working.
//  we can customize how to print logs maybe print error with red color or a red background, print success messages in green.
// make a warning using yellow color.

// challange: use chalk library in project.
// 1. install chalk.
// npm i chalk or npm install chalk.
// 2. load chalk into app.js
const chalk = require("chalk");
// 3. use it to print string "Success!" to the console in green color.
// 4. test your work with using command node app.js.
// Bonus: use docs to mess around with other styles. make text bold and inversed.
// chalk.color("text")
// 1.
// console.log(chalk.green("Hello World"));
// console.log(chalk.green("Success!"));
// console.log(chalk.red("Error"));
// console.log(chalk.blue("Done"));
// 2.
// const greenMsg = chalk.green("Success!");
// console.log(greenMsg);
// 3.
// const greenMsg = chalk.bold.green("Success!");
// console.log(greenMsg);
// 4.
const greenMsg = chalk.green.inverse.bold("Success!");
console.log(greenMsg);
