// call and apply => basic chef
//  bind => return a new function
//
//

// this.name = "avinash";
// global.name = "ashish";


function cookDish (ingredient, style) {
    console.log("this is current this: ", this)
    // global.name = "anikat";

    return `${this.name} prepare ${ingredient} in ${style} style !`;
}

/* 
let arrowFn = (ingredient, style) => {
    return `${this.name} prepare ${ingredient} in ${style} style !`;
}

console.log(arrowFn(" Panner and spices", "Muglai"))
*/


// console.log(cookDish(" Panner and spices", "Muglai"))

const sharmaKitchen = {name: "Sharama jss kitchen"}
const guptaKitchen = {name: "Gupta jss kitchen"}

// console.log(cookDish.call(sharmaKitchen," Panner and spices", "Muglai" ))


// apply

const guptaOrder = ["Chole kulche", "Punjabi Dhaba"];
// console.log(cookDish.apply(guptaKitchen, guptaOrder))


const bills = [10, 20, 40 ,80];

// console.log(Math.max.apply(null, bills));
// console.log(Math.max(...bills));

function reportDelivery(location, status) {
    return `${this.name} at ${location} ${status}`;
}

let deliveryBoy = {name : "Ranveer"}

console.log(reportDelivery.call(deliveryBoy, "Lyari", "Ordered"))
console.log(reportDelivery.apply(deliveryBoy, ["kolhapur", "Pick up"]))
console.log(reportDelivery.bind(deliveryBoy, "kolhapur", "Pick up"))

let bindReport = reportDelivery.bind(deliveryBoy)
console.log(bindReport("mp", "what"))