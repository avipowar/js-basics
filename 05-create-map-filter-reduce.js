Array.prototype.myMap = function (callback) {
  let output = [];

  if(typeof callback !== "function"){
    throw new TypeError("callback must be a function");
  }

  for (let i = 0; i < this.length; i++) {
    if (i in this){
        let result = callback(this[i], i, this)
        output.push(result)
    }
  }

  return output;
};

let arr = [1, 2, 3, 4];

console.log(
  arr.myMap((curr, index, arr) => index + arr.length)
);



// handle with empty space

let arr1 = [1, , 3];

console.log(arr1.myMap(x => x * 2));