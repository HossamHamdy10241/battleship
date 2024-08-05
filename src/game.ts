import { Input } from "./input"
export class Game{
    ctx:CanvasRenderingContext2D
    width:number
    height:number
    inhandler:Input
    constructor(){
        this.inhandler = new Input()
        let canvas = document.querySelector('canvas') as HTMLCanvasElement
        this.width=canvas.width =window.innerWidth
        this.height=canvas.height = window.innerHeight  
        this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    }
    start(...args: any[]){
        this.ctx.clearRect(0,0,this.width,this.height)
        for(let arg of args){
            arg.render(this.ctx)
        }
        for(let arg of args){
            arg.update(this.inhandler)
        }
        
        
        requestAnimationFrame(() => this.start(...args))
    }
}