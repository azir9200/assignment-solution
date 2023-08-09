// solution 1

function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please enter a valid number."
  }
  return number ** 3;

}
console.log(cubeNumber(6));

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
console.log(matchFinder('john Doe', 'mark'));

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

const myArray = [4, 76];
const origin = sortMaker(myArray);
console.log(origin);


//solution 4
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



//solution 5


var changeArray = [1, 20, 1, 10];
var chipsPrice = 28;

function canPay(changeArray, totalDue) {
  var total = 0;
  for (var i = 0; i < changeArray.length; i++) {
    total += changeArray[i];
  } console.log(total);
  return total >= totalDue;
} var summery = canPay(changeArray, chipsPrice);
console.log(summery);