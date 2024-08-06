import { Input } from "./input"
export class Game{
    ctx:CanvasRenderingContext2D
    width:number
    height:number
    handler:Input
    constructor(){
        this.handler = new Input()
        let canvas = document.querySelector('canvas') as HTMLCanvasElement
        this.width=canvas.width =window.innerWidth
        this.height=canvas.height = window.innerHeight  
        this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    }
    start(...args: any[]){
        this.ctx.clearRect(0,0,this.width,this.height)
        for(let arg of args){
            arg.render()
        }
        for(let arg of args){
            arg.update()
        }
        
        
        requestAnimationFrame(() => this.start(...args))
    }
}