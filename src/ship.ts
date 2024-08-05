
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
  render(ctx:CanvasRenderingContext2D){
    ctx.fillStyle=this.color
    ctx.save()
    ctx.translate(this.x,this.y)
    ctx.rotate(this.angel)
    ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.lineTo(-10,-this.size/2)
    ctx.lineTo(this.size,0)
    ctx.lineTo(-10,this.size/2)
    ctx.closePath()
    ctx.fill()

    ctx.restore()

  }
  update(handler:any){
    if(handler.keys.ArrowUp && this.speed<this.maxSpeed){
      this.speed+=0.2
    }else if(handler.keys.ArrowDown && this.speed>-this.maxSpeed){
      this.speed-=0.2
    }else{
      this.speed*=0.95
    }

    if(handler.keys.ArrowLeft){
      this.angel-=0.05
    }else if(handler.keys.ArrowRight){
      this.angel+=0.05
    }

     this.x+=Math.cos(this.angel)*this.speed  
     this.y +=Math.sin(this.angel)*this.speed

     if(this.x < 0+this.size/2){this.x = 0+this.size/2};
     if(this.x>this.game.width-this.size/2 ){this.x=this.game.width-this.size/2}
     if(this.y < 0+this.size/2){this.y = 0+this.size/2};
     if(this.y>this.game.height-this.size/2 ){this.y=this.game.height-this.size/2}
    

  }
}