// solution 1

function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please enter a valid number."
  }
  return number ** 3;

}
console.log(cubeNumber(5));

//solution 2

function matchFinder(string1, string2) {
  if (typeof string1 !== "string" && typeof string2 !== "string") {
    return "Please enter a valid String ."
  }
  else {
    if (string1.includes(string2)) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(matchFinder('john Doe', 'ohn'));

//solution 3
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