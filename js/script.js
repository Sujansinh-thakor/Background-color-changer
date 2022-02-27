
let btn=document.getElementById('togglebtn');
let color = document.getElementById('color');
let body = document.querySelector('body');
let temp;
color.addEventListener('input', function(e){
    body.style.background =this.value;
    }
);
   
