console.log('My first OpenSource')

let btn = document.getElementById('togglebtn');
let color = document.getElementById('color');
let body = document.querySelector('body');
let temp;

color.addEventListener('input', inputListener)
function inputListener(e) {
    btn.addEventListener('click', () => {
        body.style.background = e.target.value
    })
}
