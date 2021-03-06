// I paired [by myself, with:] on this challenge.

//By myself


// Pseudocode
//Secret number must be number, needs to equal 7 
//Password needs to be a string, "just open the door"
//allowedIn should be boolean, false 
//Needs four members, the first must be John, the second must be Mary 



// __________________________________________
// Write your code below.
var secretNumber = 7
var password = "just open the door"
var allowedIn = false
var members = ["John", "Paul", "Peter", "Mary" ]





// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
// I think my original code is pretty concise




// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// Begining to visualize what the challenge was asking was by far the hardest part of this challenge. First, I struggled
// to realize that assert was not a preset function defined in Javascript, but one written specifically for this challenge
// second, it took me a while to unpack what it does. Once I figured that out it was easy.
// 
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

 
