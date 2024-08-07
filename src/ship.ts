export class Ship {
  color: string;
  x: number;
  y: number;
  angel = 0;
  maxSpeed = 8;
  ctx:CanvasRenderingContext2D
  game: any;
  speed = 0;
  size: number;
  constructor(
    game: any,
    size: number = 40,
    color: string = "black",
    x?: number ,
    y?:number, 
  ) {
    this.game = game;
    this.size = size;
    this.color = color;
    x? this.x=x:this.x = Math.round(Math.random()*this.game.width);
    y? this.y=y:this.y = Math.round(Math.random()*this.game.height);
    this.ctx=game.ctx
    // this.y = y;
    console.log(this.x,this.y);
  }
  render() {
    this.ctx.fillStyle = this.color;
    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    this.ctx.rotate(this.angel);
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(-10, -this.size / 2);
    this.ctx.lineTo(this.size, 0);
    this.ctx.lineTo(-10, this.size / 2);
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.restore();
  }
  update() {
    if (this.game.handler.keys.ArrowUp && this.speed < this.maxSpeed) {
      this.speed += 0.2;
    } else if (
      this.game.handler.keys.ArrowDown &&
      this.speed > -this.maxSpeed
    ) {
      this.speed -= 0.2;
    } else {
      this.speed *= 0.95;
    }

    if (this.game.handler.keys.ArrowLeft) {
      if (this.game.handler.keys.ArrowDown) {
        this.angel += 0.05;
      } else {
        this.angel -= 0.05;
      }
    } else if (this.game.handler.keys.ArrowRight) {
      if (this.game.handler.keys.ArrowDown) {
        this.angel -= 0.05;
      } else {
        this.angel += 0.05;
      }
    }

    this.x += Math.cos(this.angel) * this.speed;
    this.y += Math.sin(this.angel) * this.speed;

    if (this.x < 0 + this.size / 2) {
      this.x = 0 + this.size / 2;
    }
    if (this.x > this.game.width - this.size / 2) {
      this.x = this.game.width - this.size / 2;
    }
    if (this.y < 0 + this.size / 2) {
      this.y = 0 + this.size / 2;
    }
    if (this.y > this.game.height - this.size / 2) {
      this.y = this.game.height - this.size / 2;
    }
  }
}
