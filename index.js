
let correctCount =0;
function playMemoryTest(num){
    
    const numbers = [];

    for (let i = 0; i < num; i++) {
        numbers.push(getRandom(1,100));
    }
    alert(numbers);
    checkAll(num, numbers);
    checkWithOrdinality(num, numbers);
}


function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


function checkAll(num, numbers){
    setTimeout(() => {
        const userInput = prompt(`Please enter the previous ${num} numbers in order (Separated by a commas not spaces):`).split(",") ;
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i] === Number(userInput[i])){
                correctCount++;
            }
        }
        alert(`You got first ${correctCount} numbers correct in the correct order`);
    }, 15000)
}



function checkWithOrdinality(num, numbers){
    setTimeout(() => {
        const userInput = [];
        const ordinality = ["first","second","third","fourth", "fifth", "sixth","seventh","eighth","ninth", "tenth"];
        for(let i = 0; i< numbers.length; i++){
            userInput.push(prompt(`Guess the ${ordinality[i]} number`));
            if(numbers[i] === Number(userInput[i])){
                alert(`You got the ${ordinality[i]} number correct!`);
            }
            else{
                alert(`You got the ${ordinality[i]} number incorrect!`);
            }
        } 
    }, 15000)
}

playMemoryTest(10);