document.getElementById('btn').addEventListener('click', fizzBuzz);

let input = document.getElementById('number');
input.parentElement.parentElement.parentElement.addEventListener('keyup', function(e){
    if(e.keyCode === 13) {
        event.preventDefault();
        document.getElementById('btn').click();
    }
});

function fizzBuzz(input) {
    let answer = document.querySelector('.answer');

    let number = document.getElementById('number').value;
    input = Number(number);

    if (isNaN(Number(number)) || (input == ''))
        answer.textContent = 'Give me a number! I want one now!';
    
    // divisible by both 3 & 5, returns 'fizzbuzz'
    else if ((input %3 === 0) && (input %5 === 0))
        answer.textContent = 'FizzBuzz';
    
    // divisible by 3, returns 'fizz' 
    else if (input %3 === 0) 
        answer.textContent ='Fizz';

    // divisible by 5, returns 'buzz'
    else if (input %5 === 0)
        answer.textContent ='Buzz';

    // not divisble by 3 or 5, returns the same input
    else
        answer.textContent ='Hey come on, be serious, give me a better number!';
}
