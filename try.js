function getPositiveNumber(array) {
  const positiveNumber = [];
  for (let i = 0; i < array.length; i++) {
    let index = i;
    let element = array[index];
    if (element >= 0) {
      positiveNumber.push(element);
    } else {
      break;
    }
  }
  return positiveNumber;
}
const numbers = [23, -24];
//console.log(getPositiveNumber(numbers));

function sortMaker(arr) {
  if (arr[0] === arr[1]) {
    return "equal";
  } else {
    return arr.sort(function (a, b) {
      return a - b;
    });
  }
}

const myArray = [4, 7, 42, 2, 34, -32, -45, 50];
const origin = sortMaker(myArray);
console.log(origin);