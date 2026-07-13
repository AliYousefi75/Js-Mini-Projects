let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

let r = 40;
let x = 50;
let y = 50;
let vx = 10;

function animate(){
    c.clearRect(0,0,window.innerWidth,window.innerHeight);
    c.beginPath();
    c.arc(x,y,r,0,2*Math.PI);
    c.fillStyle='red';
    c.fill();
    x+= vx;
    requestAnimationFrame(animate)
}
animate();