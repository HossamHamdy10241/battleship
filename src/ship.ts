
export class Ship{
  color='black'
  x:number
  y:number
  angel=0
  maxSpeed=8
  game:any
  speed=0
  size=40
  constructor(x:number, y:number, game:any){
    this.game=game
    this.x=x
    this.y=y
  }
  render(){
    this.game.ctx.fillStyle=this.color
    this.game.ctx.save()
    this.game.ctx.translate(this.x,this.y)
    this.game.ctx.rotate(this.angel)
    this.game.ctx.beginPath()
    this.game.ctx.moveTo(0,0)
    this.game.ctx.lineTo(-10,-this.size/2)
    this.game.ctx.lineTo(this.size,0)
    this.game.ctx.lineTo(-10,this.size/2)
    this.game.ctx.closePath()
    this.game.ctx.fill()
    this.game.ctx.restore()

  }
  update(){
    if(this.game.handler.keys.ArrowUp && this.speed<this.maxSpeed){
      this.speed+=0.2
    }else if(this.game.handler.keys.ArrowDown && this.speed>-this.maxSpeed){
      this.speed-=0.2
    }else{
      this.speed*=0.95
    }


    if(this.game.handler.keys.ArrowLeft){
      if(this.game.handler.keys.ArrowDown){this.angel+=.05}
      else{this.angel-=0.05}
    }else if(this.game.handler.keys.ArrowRight){
      if(this.game.handler.keys.ArrowDown){this.angel-=.05}
      else{
        this.angel+=0.05

      }

    }

     this.x+=Math.cos(this.angel)*this.speed  
     this.y +=Math.sin(this.angel)*this.speed

     if(this.x < 0+this.size/2){this.x = 0+this.size/2};
     if(this.x>this.game.width-this.size/2 ){this.x=this.game.width-this.size/2}
     if(this.y < 0+this.size/2){this.y = 0+this.size/2};
     if(this.y>this.game.height-this.size/2 ){this.y=this.game.height-this.size/2}
    

  }
}