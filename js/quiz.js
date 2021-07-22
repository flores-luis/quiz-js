// Javascript Quiz

/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

// 2. Store the rank of a player


// 3. Select the <main> HTML element


/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/


/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/


// 6. Output results to the <main> element

//Declared variables
let rank = 0;
let playerRank;
message = `You got ${rank} out of ${numberOfQuestions} correct.
Your Rank: ${playerRank}`;


//First Quiz question
const firstResponse = prompt("What is the color of the ocean?");
if ( firstResponse = "blue") {
    rank += 1;
}
//Second Quiz question
const secondResponse = prompt("What is 2 x 2?");
if ( secondResponse = 4) {
    rank += 1;
} 
//Third Quiz question
const thirdResponse = prompt("What shape is a window?");
if ( thirdResponse = "square") {
    rank += 1;
} 
//Fourth Quiz question
const fourthResponse = prompt("What country is California in?");
if ( fourthResponse = "United States") {
    rank += 1;
} 
//Fifth Quiz question
const fifthResponse = prompt("What is the next year?");
if ( fifthResponse = fifthAnswer) {
    rank += 1;
} 

//Second Conditional Statement that compares variables rank & playerRank
if (rank = 5) {
    playerRank === "Gold"
} else if (rank === 4 || 3){
    playerRank === "Silver"
} else if (rank === 2 || 1){
    playerRank === "Bronze"
} else {
    playerRank === "No Crown"
}

total = document.querySelector("main").innerHTML = message;