const argv = require("yargs").argv;
const { sum, sub, mult, div } = require("./function");

// TODO: рефакторить
function invokeAction({ action, num1, num2 }) {
  switch (action) {
    case "sum":
      console.log(sum(num1, num2));
      break;

    case "sub":
      console.log(sub(num1, num2));
      break;

    case "mult":
      console.log(mult(num1, num2));
      break;

    case "div":
      console.log(div(num1, num2));
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
