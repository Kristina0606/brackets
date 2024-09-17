/** @format */

function check(str) {
  let stackStr = [];
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    if (str.length == 0) {
      return false;
    }
    if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
      stackStr.push(str[i]);
    } else if (
      str[i] == ")" &&
      stackStr[stackStr.length - 1] == "(" &&
      stackStr.length > 0
    ) {
      stackStr.pop();
    } else if (
      str[i] == "}" &&
      stackStr[stackStr.length - 1] == "{" &&
      stackStr.length > 0
    ) {
      stackStr.pop();
    } else if (
      str[i] == "]" &&
      stackStr[stackStr.length - 1] == "[" &&
      stackStr.length > 0
    ) {
      stackStr.pop();
    } else if (
      (str[i] == ")" || str[i] == "}" || str[i] == "]") &&
      stackStr.length === 0
    ) {
      return false;
    }
  }
  console.log(stackStr);
  return stackStr.length === 0;
}

let res = check("");
console.log(res);

module.exports = check;
