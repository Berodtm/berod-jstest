let button = document.querySelector('button');
let box = document.getElementById('changeMe');

button.onclick = function changeColor() {
    if (box.style.background == 'red'){
    box.style.background = 'blue';
    } else if (box.style.background == 'blue') {        
        box.style.background = 'green';
    } else {
        box.style.background = 'red'
    

}

