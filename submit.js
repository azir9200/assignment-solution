function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please enter a valid number."
  }
  return number ** 3;
}
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
function sortMaker(arr) {
  if (arr[0] < 0 || arr[1] < 0) {
    return "invalid input input"
  }
  if (arr[0] === arr[1]) {
    return "equal";
  } else if (arr[0] < arr[1]) {
    var temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
    return arr;
  }
}
function findAddress(obj) {
  var result = "";
  if (obj.hasOwnProperty("street")) {
    result += obj.street + ",";
  } else {
    result += "__,";
  }
  if (obj.hasOwnProperty("house")) {
    result += obj.house + ",";
  } else {
    result += "__,";
  }
  if (obj.hasOwnProperty("society")) {
    result += obj.society + ",";
  } else {
    result += "__,";
  }
  return result.slice(0, -1);
}
function canPay(changeArray, totalDue) {
  if (changeArray.length === 0) {
    return "invalid input";
  }
  var total = 0;
  for (var i = 0; i < changeArray.length; i++) {
    total += changeArray[i];
  }
  return total >= totalDue;
} var summery = canPay(changeArray, chipsPrice);