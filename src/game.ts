import { Input } from "./input"
import {Ship} from './ship'

interface shipparms{
    size?: number 
    color?: string
    x?: number 
    y?: number  
    game: any
}
export class Game{
    ctx:CanvasRenderingContext2D
    width:number
    height:number
    player:any
    handler:Input
    constructor(){
        this.handler = new Input()
        let canvas = <HTMLCanvasElement> document.querySelector('canvas') 
        this.width=canvas.width =window.innerWidth
        this.height=canvas.height = window.innerHeight  
        this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    }
    createPlayer(prms:shipparms){
        this.player=new Ship(prms.game,prms.size,prms.color,prms.x,prms.y)
        return this.player

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