Array.prototype.myReduce = function (callback, accumulator) {
  if (this === null) {
    throw new TypeError("Cannot read properties of null or undefined");
  }

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  let initialValue;
  let i = 0;
  let len = this.length;
//   console.log("length of array:",len)

  if (arguments.length > 1) {
    initialValue = accumulator;
  } else {
    // if send empty array
    while (i < len && !(i in this)) {
      i++;
    }

    if (i >= len) {
      throw new TypeError("Reduce of empty array with no initial value");
    }

    initialValue = this[i];
    i++;
  }

  for (; i < this.length; i++) {
    if (i in this) {
      initialValue = callback(initialValue, this[i], i, this);
    }
  }
  return initialValue;
};

let arr =  [1, 2, 3];
let arr1 =  [ ,1, 2];

console.log(
  arr.myReduce((acc, curr) => (acc += curr), 0)
);

console.log(
  arr1.myReduce((acc, curr) => (acc += curr))
);
