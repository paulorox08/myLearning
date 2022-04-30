const start = document.querySelector('.start');
const end = document.querySelector('.end');
const enter = document.querySelector('.submit');
const container = document.querySelector('.container')



function fizzBuzzz() {
    let i = start.value;
    while (i < end.value) {
        if (i % 3 == 0 && i % 5 != 0) {
            console.log('Fizz');
            let fizz = document.createElement('div');
            fizz.innerText = 'Fizz';
            container.appendChild(fizz);
        }
        else if (i % 5 == 0 && i % 3 != 0) {
            console.log('Buzz');
            let buzz = document.createElement('div');
            buzz.innerText = 'Buzz';
            container.appendChild(buzz);
        }
        else if (i % 5 == 0 && i % 3 == 0) {
            console.log('FizzBuzz')
            let fizzBuzz = document.createElement('div');
            fizzBuzz.innerText = 'FizzBuzz';
            container.appendChild(fizzBuzz);
        }
        else {
            console.log(i)
            let norm = document.createElement('div');
            norm.innerText = i;
            container.appendChild(norm);
        }
        i++;
    }
};

function clear() {
    container.textContent = ""
}

enter.addEventListener('click', () => {
    clear();
    fizzBuzzz();
});