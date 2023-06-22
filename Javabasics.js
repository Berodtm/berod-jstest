let button = document.querySelector('button');
let box = document.getElementById('changeMe');

button.onclick = function changeColor() {
    let currentColor = box.style.backgroundColor;

    if (currentColor === 'red') {
        box.style.backgroundColor = 'blue';
    } else if (currentColor === 'blue') {
        box.style.backgroundColor = 'green';
    } else if (currentColor === 'green') {
        box.style.backgroundColor = 'yellow';
    } else {
        box.style.backgroundColor = 'red';
    }
}; 
