// console.log(this)

function returnThisType () {
    return typeof this
}

// console.log(returnThisType())

function returnThis() {
    return this;
}

// console.log(returnThis())

let bollywoodFilm = {
    name : "bajirao mastani",
    lead : "Ranveer",
    introduce () {
        // console.log("this is this in object", this)
        return `${this.lead} performs in ${this.name}`
    }
}

// console.log("this is the bollywoodFilm call: ", bollywoodFilm.introduce());


const filmDirector = {
    name : "ashish gaikwad",
    cast : ["ranveer", "deepika", "priynka"],

    announceCast() {
        this.cast.forEach((actor)=> {
            console.log(`${this.name} introduce ${actor}`)
        })
    }
}

// filmDirector.announceCast()

const filmSet = {
    crew: "spot boys",
    prepareProps() {
        console.log(`outer this.crew: ${this.crew}`)
        
        function arrangeChairs() {
            console.log(`inner this.crew: ${this.crew}`)
        }
        arrangeChairs();
        
        // arrow function
        const arrangeLights = () => {
            // arrow function inherit this from parent  
            console.log(`arrow this.crew: ${this.crew}`)
        }
        arrangeLights()
    }
} 

// filmSet.prepareProps()


// Detached method

const actor = {
    name : "ranveer",
    bow() {
        return `${this.name} takes a bow`
    }
}

// console.log(actor.bow);
// console.log(actor.bow());
// const detachedBow = actor.bow;
// console.log(detachedBow())

const myFunction = function() {
    console.log(this)
}

const myFunctionTwo = () => {
    console.log(this)
}
myFunction()
myFunctionTwo()