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

let firstResponse = prompt("What is the color of the ocean?")
let secondResponse = prompt("What is 2 x 2?")
let thirdResponse = prompt("What shape is a window?")
let fourthResponse = prompt("What country is California in?")
let fifthResponse = prompt("What is the next year?")

const firstAnswer = "blue"
const secondAnswer = 4
const thirdAnswer = "square"
const fourthAnswer = "United States"
const fifthAnswer = "2022"

numberOfQuestions = 5;
rank = 0;
let playerRank;
message = `You got ${rank} out of ${numberOfQuestions} correct.
Your Rank: ${playerRank}`;


if ( firstResponse = firstAnswer) {
    rank += 1;
} 
if ( secondResponse = secondAnswer) {
    rank += 1;
} 
if ( thirdResponse = thirdAnswer) {
    rank += 1;
} 
if ( fourthResponse = fourthAnswer) {
    rank += 1;
} 
if ( fifthResponse = fifthAnswer) {
    rank += 1;
} 

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