let inputR = document.querySelector('.input-r')
let inputG = document.querySelector('.input-g')
let inputB = document.querySelector('.input-b')
let inputO = document.querySelector('.input-o')


let redBar = document.querySelector('.red-bar')
let greenBar = document.querySelector('.green-bar')
let blueBar = document.querySelector('.blue-bar')
let opBar = document.querySelector('.op-bar')

let colorBox = document.querySelector('.color-box')
let output = document.querySelector('.output')
let color = 'rgba(0, 0, 0, 1)'
output.innerHTML = color

inputR.addEventListener('input', () => {
    actualizarColor()
});
inputG.addEventListener('input', () => {
    actualizarColor()
});
inputB.addEventListener('input', () => {
    actualizarColor()
});
inputO.addEventListener('input', () => {
    actualizarColor()
});

redBar.addEventListener('input', () => {
    alctualizarBar()
});

greenBar.addEventListener('input', () => {
    alctualizarBar()
});
blueBar.addEventListener('input', () => {
    alctualizarBar()
});

opBar.addEventListener('input', () => {
    alctualizarBar()
});

function actualizarColor(){
    color = `rgba(${inputR.value}, ${inputG.value}, ${inputB.value}, ${inputO.value})`;
    colorBox.style.backgroundColor = color;
    redBar.value = inputR.value
    greenBar.value = inputG.value
    blueBar.value = inputB.value
    opBar.value = inputO.value
    output.innerHTML = color
}; 

function alctualizarBar(){
    color = `rgba(${redBar.value}, ${greenBar.value}, ${blueBar.value}, ${opBar.value})`;
    colorBox.style.backgroundColor = color;
    inputR.value = redBar.value
    inputG.value = greenBar.value
    inputB.value = blueBar.value
    inputO.value = opBar.value
    output.innerHTML = color
};

