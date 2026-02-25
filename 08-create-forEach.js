Array.prototype.myForeach = function (callBack) {
  if (typeof callBack !== "function") {
    throw new TypeError("Callback must be a function");
  }

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      callBack(this[i], i, this);
    }
  }
};

let arr = [1, 2, 3];

arr.myForeach(function (curr) {
  console.log(curr)
});
