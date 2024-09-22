const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum-minNum)+minNum);

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Enter a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess<minNum || guess>maxNum){
        window.alert("Please enter a valid range");
    }
    else{
        attempts++;
        if(guess<answer){
            window.alert("The number is too low! Try Again!!");
        }
        else if(guess>answer){
            window.alert("The number is too high! Try Again!!");
        }
        else{
            window.alert(`Bravo! You have guessed it right!! It was ${answer} and it took you ${attempts} attempts to guess the answer!`);
            running = false;
        }
    }
}