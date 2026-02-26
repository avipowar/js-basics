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

## understanding `Prototype and Prototype Inheritance` in Javascript

# Understanding Object.create() and Prototype Inheritance
- Object.create(parent) creates a new object linked to the parent.
- JavaScript follows a prototype chain to find properties.
- If a property is not found in the object, JS looks up the chain.
- Child objects can override parent properties.
- Understanding Prototype Chain

# Understanding this with Inherited Methods
- this depends on how a function is called.
- Even if a method exists in the parent object,this refers to the object that calls it.
- Example: avinash.cookTraditionalDish() => this.name becomes "avinash" (not "ishwara")

# Extending Built-in Objects (Array Prototype)
- Added custom method using Array.prototype.
- All arrays automatically get access to that method.
- Example: Array.prototype.last => [1,2,3].last() => 3
- Adding properties to prototype makes them available to all instances.
- Example: Array.prototype.avinash = "avinash"
- and this process is called polyfill.


## Array.prototype.myMap Polyfill
- Returns a new array
- Does not mutate the original array
- Skips empty (sparse) array slots
- Validates callback function

## Array.prototype.myFilter Polyfill
- Returns a new array
- Does not mutate the original array
- Skips empty (sparse) array slots
- Validates callback function

## Custom Array.prototype.myReduce Polyfill
- Implements a custom version of JavaScript’s built-in reduce() method.
- Validates this and ensures the callback is a function.
- Handles optional initial accumulator value correctly.
- Skips empty slots in sparse arrays using i in this.
- Throws an error for empty arrays without an initial value.


## Custom Array.prototype.foreach Polyfill
- Callback receives 3 arguments: value, index, array
- typeof check ensures callback is a function.
- i in this skips empty (sparse) array slots.
- forEach always returns undefined.




## class understanding

# javaScript Classes
- class is a syntactic sugar over prototype-based inheritance.
- The constructor() method runs automatically when using new.
- It is used to initialize object properties.

# Instance Properties
- Properties defined with this belong to each instance.
- Each object created using new gets its own copy.

# Methods Inside Class (Prototype Methods)
Methods defined inside the class body are added to prototype.

# They are shared between all instances.
- Methods defined inside the class body are added to prototype.
- They are shared between all instances.

# new Keyword
- When you use new:
- Creates empty object
- Links it to prototype
- Binds this
- Returns the object automatically