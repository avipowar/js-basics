Array.prototype.myFilter = function (callback) {
  if (this == null) {
    throw new TypeError("Cannot read properties of null or undefined");
  }


  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  
  let output = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      let result = callback(this[i], i, this);

      if (result) {
        output.push(this[i]);
      }
    }
  }
  return output;
};

let arr = [1, 2, 3, 4, 5, 6];

console.log(arr.myFilter((curr) => curr % 2 === 0, 0));
