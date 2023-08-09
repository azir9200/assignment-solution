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


function findAddress(obj) {
  const infoProp = ['street', 'house', 'society'];
  const gapProp = infoProp.filter(prop => !(prop in obj));
  if (gapProp.length === 0) {
    return `${obj.street}, ${obj.house}, ${obj.society}`;
  } else {
    const missInfo = gapProp.map(prop => `__${prop}__`).join(', ');
    return ` ${missInfo}`;
  }
}
const inputObject = {
  street: "10",
  house: "15A",
  society: "Earth Perfect"
};
const result = findAddress(inputObject);
console.log(result);



var changeArray = [1, 2, 1, 10];
var chipsPrice = 18;

function canPay(changeArray, totalDue) {
  var total = 0;
  for (var i = 0; i < changeArray.length; i++) {
    total += changeArray[i];
  } console.log(total);
  return total >= totalDue;
} var summery = canPay(changeArray, chipsPrice);
console.log(summery);