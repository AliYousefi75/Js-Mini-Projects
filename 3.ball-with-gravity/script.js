let canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c = canvas.getContext('2d')

this.screen = {
    width:window.innerWidth,
    height:window.innerHeight
}

this.mouse ={
    x: screen.width /2,
    y: screen.height /2
}

class Ball{
    constructor(x, y, dx, dy, r, color){
        this.gravity = 1 
        this.friction =0.8 
        this.r = r || 10      
        this.x = x || randonIntFromInterval(0 + this.r, window.innerWidth - this.r)
        this.y = y || randonIntFromInterval(0 + this.r, window.innerHeight - this.r)
        this.dx = dx || (Math.random() - 0.5) * 10
        this.dy = dy || (Math.random() ) * 20
        this.color = color || `rgba (231 ,76 ,60 ,${Math.random()})`;
        this.rc = "rgb(" + randonIntFromInterval(0, 255) + ',' + randonIntFromInterval(0, 255) + ',' + randonIntFromInterval(0, 255) + ")";
        this.draw()
    }

    draw(){
        c.beginPath()
        c.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
        c.fillStyle = this.rc
        c.fill()
    }

    update(){
        if(this.y +this.r+this.dy >screen.height){
            this.dy =-this.dy*this.friction
            this.dx =-this.dx*this.friction
        }else{
            this.dy +=this.gravity
        }
        if(this.dx +this.r +this.dx >= screen.width || this.dx + this.r+this.dx <=0){
            this.dx =- this.dx
        }
        this.y += this.dy
        this.x += this.dx

        this.draw
    }
}

class Canvas{

    constructor(){

    }

    animate(){

    }

}

let myVan = new Canvas()
myCan.animate()





















function randonIntFromInterval(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
