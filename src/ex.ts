import './style.css'

let canvas = <HTMLCanvasElement>document.querySelector('canvas')
let ctx =<CanvasRenderingContext2D> canvas.getContext('2d')

canvas.width = window.innerWidth

canvas.height = window.innerHeight



// Center of the canvas
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// Scale factor to make the plot fit in the canvas
const scaleFactor = 20; // Adjust this as needed

// Function to convert polar coordinates (r, θ) to Cartesian (x, y)
function polarToCartesian(r:number, theta:number) {
    return {
        x: centerX + r * Math.cos(theta),
        y: centerY + r * Math.sin(theta)
    };
}

// Draw the polar plot
ctx.beginPath();
ctx.moveTo(centerX, centerY);

for (let theta = 0; theta < -12 * Math.PI; theta -= 0.01) { // Increase range for more turns
    const r = theta; // r = θ
    const { x, y } = polarToCartesian(r*30, theta);

    // Draw line to the new point
    ctx.lineTo(x, y);
}

ctx.strokeStyle = 'blue'; // Set the line color
ctx.lineWidth = 2;
ctx.stroke();
