const pizza = new Promise((resolve) => {
  setTimeout(() => resolve("Pizza Ready 🍕"), 2000);
});

const burger = new Promise((resolve) => {
  setTimeout(() => resolve("Burger Ready 🍔"), 1000);
});

const drink = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Drink Ready 🥤"), 500);
});


// Promise.race([pizza, burger, drink])
//   .then((items) => {
//     console.log("All items ready:", items);
//   })
//   .catch((error) => {
//     console.log("Order failed:", error);
//   });

async function serveCustomer() {
  try {
    const items = await Promise.all([pizza, burger, drink]);
    console.log("Serving:", items);
  } catch (error) {
    console.log("Kitchen issue:", error);
  }
}

serveCustomer();