function makeFunc() {
    const name = "mozila"
    const name2 = "hitesh sir"
    function displayName() {
        console.log(name)
    }
    return displayName;
}

const myFunc = makeFunc()
myFunc()


function startCompany() {
    function ca(name){
        return `Name of your company is ${name}`
    }
    return ca;
}

const getCompany = startCompany()
const myCompanyName = getCompany("zomato")


function eternal(guest) {
    const guestName = guest;

    function zomato() {
        console.log(`Hi ${guestName} from zomato`)
    }

    function blinkit() {
        console.log(`Hi ${guestName} from blinkit`)
    }
    return {
        zomato,
        blinkit
    }
}

const ashish = eternal("ashish");
// ashish.blinkit()
// ashish.zomato()