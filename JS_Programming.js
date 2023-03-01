//Sequence Practice Problems
//1- Use REPL – Random Function Math.floor(Math.random() * 10); to get SingleDigit.
var randomnumber=Math.floor(Math.random()*10);
console.log(randomnumber);

//2- Use REPL – Use Random to get Dice Number between 1 to 6.
//Function to generate random number
function randomNumber(min, max) 
{
    return Math.floor(Math.random() * (max - min) + min);
}
  
console.log("Random Number between 1 and 6: ")
console.log( randomNumber(1, 6) );