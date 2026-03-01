// pending , done(fullfil, resolve), nope(reject, nako)
//

const promise = new Promise((res, rej)=>{
    setTimeout(()=>{
        res("chaicode")
        rej("chaicode reject")
    }, 3000)
});
// console.log(promise)

//  not good way 

// setTimeout(()=>{
//     console.log(promise)
// }, 4000) 

// not clean syntax

// promise.then((data)=>{
//     console.log(data)
// },(error)=> {
//     console.log(error)
// })

// create new function 

function myFuction (data) {
    console.log(data)
}

// promise.then(console.log)
// promise.then(myFuction)

promise.then((data)=>{
    newData = data.toUpperCase();
    return newData
})
.then((data)=>{
    // console.log(data)
})
.catch((error)=>{
    // console.log(error)
});


const turant = Promise.resolve("Turant");
// console.log(turant)

const allPromise = Promise.allSettled([
    Promise.resolve("Chai"),
    Promise.resolve("Code"),
    Promise.reject("Error"),
])

// allPromise.then(console.log)

const anyPromise = Promise.any([
    Promise.resolve("Chai"),
    Promise.resolve("Code"),
    Promise.reject("Error"),
])

// anyPromise.then(console.log)


// clean syntax instead of use .then we use Async await 

const hPromise = new Promise((res, rej)=> {
    setTimeout(()=>{
        // rej(new Error("matser ji error"))
    }, 3000,)
})

async function  nice () {
    try {
        const result = await hPromise;
        console.log(result)
    } catch (error) {
        console.log(error.message)
    }
}

// console.log(nice())


const p1 = new Promise((res, rej)=>{
    // setTimeout(()=>{
        res("i am p1 promise")
    // }, 2000)
}) 

const p2 = p1.then((data)=>{
    console.log(data)
})

p2.then((data)=>{console.log(data)})