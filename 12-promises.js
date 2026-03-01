// console.log("ashish");
// Promise.resolve("resolved value").then((v) => console.log("microtask",v))
// console.log("avinash")

function boilWater(time) {
    return new Promise((res, rej) => {
        if(typeof time !== "number" || time < 0){
            rej(new Error("ms must be in number and greater than zero"))
        }
        setTimeout(()=>{
            res("Ubal Gaya")
        }, time)
    })
}

// boilWater(200)
//     .then((msg) => console.log("resolve msg: " , msg))
//     .catch((err) => console.log("rejected: ", err.message))

function grindLeaves() {
  return Promise.resolve("Leaves grounded");
}

// grindLeaves().then((msg)=> console.log(msg))


function steepTea(time) {
  return new Promise((res) => {
    setTimeout(() => res("Steeped tea"), time);
  });
}

steepTea(2000).then((msg)=>console.log(msg))

