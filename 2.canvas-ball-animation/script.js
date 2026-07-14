// // -------------Functional Animation---------------//
// let canvas = document.querySelector('canvas');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;


// let c = canvas.getContext('2d');

// let r = 40;
// let x = randomIntFromInterval(0+r , window.innerWidth -r);
// let y = randomIntFromInterval(0+r,window.innerHeight -r);
// let vx = (Math.random() - 0.5) *4;
// let vy = (Math.random() - 0.5) *4;


// function animate(){
//     c.clearRect(0,0,window.innerWidth,window.innerHeight)
//     c.beginPath();
//     c.arc(x,y,r,0,2*Math.PI);
//     c.fillStyle='green'
//     c.fill()
//     if(x+r > window.innerWidth || x-r < 0){
//         vx = -vx
//     }
//     if(y+r > window.innerHeight || y-r < 0){
//         vy = -vy
//     }
//     x += vx
//     y += vy;

//     requestAnimationFrame(animate)
// }

// animate();

// function randomIntFromInterval(min,max){
//     return Math.floor(Math.random() * (max-min+1) + min)
// }




// ----------------Animation with object oriented programing-----------------//

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext('2d');


class Ball{
    constructor(){
        this.color = `rgb(${randomNumb(0,255)},${randomNumb(0,255)},${randomNumb(0,255)})`
        this.r = randomNumb(5,15);
        this.x = randomNumb(0+this.r,window.innerWidth - this.r);
        this.y = randomNumb(0+this.r,window.innerHeight - this.r);
        this.vx = (Math.random() - 0.5)*6;
        this.vy = (Math.random() - 0.5)*6;
        this.draw()
    }

    draw(){
        c.beginPath();
        c.arc(this.x,this.y,this.r,0,2*Math.PI);
        c.fillStyle=this.color;
        c.fill()
    }

    update(){
      
    }
}



function animate(){

    requestAnimationFrame(animate)
}
animate()




