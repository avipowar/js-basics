const ishwara = {
    name : "ishwara",
    generation: "grandfather",
    cookTraditionalDish () {
        return `${this.name} cooks an ancient family recipe`;
    }
}

const arjun = Object.create(ishwara);
// console.log(arjun)
arjun.name = "arjun";
arjun.generation = "father";
arjun.runBusiness = function () {
  return `${this.name} runs the family business`;
};
// console.log(arjun);

const avinash = Object.create(arjun);
avinash.name = "avinash";
avinash.generation = "son";
avinash.makeFilm = function () {
  return `${this.name} directs blockbustur movies`;
};

// console.log(avinash)
console.log(Object.getPrototypeOf(avinash));

// console.log(avinash.makeFilm());
// console.log(avinash.runBusiness());
// console.log(avinash.cookTraditionalDish());

Array.prototype.last = function () {
  return this[this.length-1];
}

Array.prototype.avinash = "avinash"

let arr = [1,2,3,4,5];

console.log(arr.last())
console.log(arr.avinash);
