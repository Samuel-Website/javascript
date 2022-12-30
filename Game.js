function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
let guess_number = getRandomInt(100)+1

let chances = 0
let score = 100
let user;


  do {
	    const prompt = require("prompt-sync")();
	    user = prompt("Enter the number:- ")
	    user = parseInt(user)
        if (guess_number>user) {
            console.log("Number you entered is less than actual number")
        }
        else if(guess_number<user){
            console.log("number you entered is greater than actual number")
        }
        chances++






} while (user!=guess_number);
  
    console.log("You guessed it correct the number is:-", guess_number)
    console.log("Number of guesses you took", chances)
   console.log("Your score is:- ",score-chances)