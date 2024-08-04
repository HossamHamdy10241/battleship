export class Ship{
  color='black'
  x:number
  y:number
  abgel=0
  size=50
  constructor(x:number, y:number){
    this.x=x
    this.y=y
  }
  render(ctx:CanvasRenderingContext2D){
    ctx.fillStyle=this.color
    ctx.save()
    ctx.translate(this.x,this.y)
    ctx.rotate(this.abgel)
    ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.lineTo(-10,-this.size/2)
    ctx.lineTo(this.size,0)
    ctx.lineTo(-10,this.size/2)
    ctx.closePath()
    ctx.fill()

    ctx.restore()

  }
}