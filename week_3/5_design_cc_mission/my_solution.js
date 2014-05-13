// I worked [by myself, with:] on this challenge
by myself
// Your mission description:
// Create a rock, paper, scissors game
// 
// 

// Pseudocode
// create a prompt for player input
// create a loop to determine computer input (utliamtely scrapped the loop idea when I discovered the .random function)
// define a complex function for evaluating the two inputs
// run function
// 

// Initial Code


/*
var humanthrow = prompt ("You're move: rock, paper, or scissors?")

var computerthrow = Math.random();
if (computerthrow < 0.34) {
	computerthrow = "rock";
} else if(computerthrow <= 0.67) {
	computerthrow = "paper";
} else {
	computerthrow = "scissors";
} console.log("Computer: " + computerthrow);
    

var decideWinner = function(humanthrow, computerthrow){
    if ((humanthrow=rock && computerthrow=scissors) ||          (playerthrow=scissors && computerthrow=paper) || 
    (playerthrow=paper && computerthrow=rock)) {
        return "Human Wins!";}
    else if (humanthrow === computerthrow){
        console.log("It's a tie")}
    else{
        console.log("Computer Wins!")}
    };

decideWinner(humanthrow, computerthrow);
*/



// Refactored Code


var humanthrow = prompt ("You're move: rock, paper, or scissors?")



var computerthrow = Math.random();
if (computerthrow < 0.34) {
	computerthrow = "rock";
} else if(computerthrow <= 0.67) {
	computerthrow = "paper";
} else {
	computerthrow = "scissors";
} console.log("Computer: " + computerthrow);
    

var decideWinner = function(throw1, throw2){
    if ((throw1==="rock" && throw2==="scissors") || (throw1==="scissors" && throw2==="paper") || 
    (throw1==="paper" && throw2==="rock")) {
        return "Human Wins!";
        }
    else if (throw1 === throw2){
        console.log("It's a tie")}
    else{
        console.log("Computer Wins!")}
    };

decideWinner(humanthrow, computerthrow);





// Reflection
// I had two big "Aha!" moments during the project. The first moment was when I discovered the .random function. 
//Previously I was trying to generate a computer reponse using a loop which was complicated and not truely random.
// However, in the future I'd like to add to this project by using a loop to improve the strategy of the computer.
// For example, most players are inclined to throw whatver will beat what their opponent last played. I believe a loop
// could be use to work on this. The second big moment came when I realized that I was initially making the mistake of 
// including the "humanthrow" and "computerthrow" variables throughout the function definition. I ultimately realized
// that need to create placeholder variables within the function and then the program ran smoothly.
// 
// 
