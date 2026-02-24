## Understanding `this` in JavaScript

- How `this` works in the global scope
- How `this` behaves inside regular functions
- How `this` behaves inside nested regular functions
- How `this` works in arrow functions
- How `this` behaves inside objects and methods

## Understanding `call , apply, bind` in JavaScript

- I learned that call(), apply(), and bind() are used to control the value of this in JavaScript.
- call() → executes immediately with separate arguments
- apply() → executes immediately with array arguments
- bind() → returns a new function with fixed this
- The main difference between call() and apply() is how arguments are passed

## Understanding `new` in JavaScript

# When we use new:
- A new empty object {} is created.
- this points to that new object.
- Properties are attached to that object.
- The object is returned automatically.

- Methods added using prototype are shared between all instances.
- car1.status === car2.status → true (same function reference)

# If you call constructor without new:

- this will point to:
- window (in browser)
- global (in Node.js)

- It will NOT create a new object properly.

# Factory Function (Without new)

- No new keyword required.
- Function directly returns a new object.
- Each object gets its own copy of methods.
- auto1.run === auto2.run → false (different function references)