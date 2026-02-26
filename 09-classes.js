class Cricketer {
    constructor(name, role){
        this.name = name,
        this.role = role,
        this.matchesPlayed = 0,
        this.stamina = 100;
    }

    introduce1(){
        // console.log(this=== Cricketer)
        return `${this.name} the ${this.role} | matchPlayed: ${this.matchesPlayed} | stamina: ${this.stamina}`
    }

    // arrow function

    // introduce = () => {
    //     console.log(this)
    //     return `${this.name} the ${this.role} | matchPlayed: ${this.matchesPlayed} | stamina: ${this.stamina}`
    // }
}

const player1 = new Cricketer("virat", "batsman")
// console.log(player1)
const player2 = new Cricketer("bumrah", "batsman")

// console.log(player1.hasOwnProperty("matchesPlayed"))
// console.log(Object.getOwnPropertyNames(Cricketer.prototype))
// console.log(Cricketer.prototype.constructor)

// console.log(player1)
// console.log(player1.constructor === Cricketer); // true
// console.log(player1.introduce === player2.introduce); // true

let res = player1.introduce1()
let res2 = player1.introduce

// console.log("normal function :", res());
// console.log(" arrow function : ",res2());

// console.log(typeof Cricketer);





class Debutant {
  constructor(name) {
    this.name = name;
    this.walkOut = () => `${this.name} walks out to bat for the first time`;
  }
}

const debutant1 = new Debutant("Shubman");
const somethingFromLastClass = debutant1.walkOut;

const debutant2 = new Debutant("Yashasvi");
console.log(debutant1.walkOut === debutant2.walkOut);

console.log(somethingFromLastClass());
