function falsyValuesCheck(array) {
  let truthyArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      truthyArray.push(array[i]);
    }
  }

  return truthyArray;
}

let testArray = [
  false,
  null,
  NaN,
  undefined,
  "",
  "string",
  0,
  55,
  true,
  "test",
];

console.log(falsyValuesCheck(testArray));
