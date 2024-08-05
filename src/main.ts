import './style.css'
import { Input } from './input';
import { Game } from './game';
import { Ship } from './ship';
// const canvas = document.querySelector('canvas') as HTMLCanvasElement

// let width = canvas.width= window.innerWidth;
// let height = canvas.height = window.innerHeight;

// const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

// let ship = new Ship(ctx,width/2,height/2)
// ship.render()

let game=new Game()

let ship = new Ship(game.width/2,game.height/2,game)
game.start(ship)