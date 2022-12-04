import * as sliders from "./user_input/sliders.js";
import {complex} from "../node_modules/ts-complex-numbers/lib/complex.js";
import * as s from "./settings/settings.js";
import * as canvas from "./canvas.js";

function complexToCoords(c: complex): [number, number] {
    let x = c.real * s.RAD + window.innerWidth / 2;
    let y = c.img * s.RAD + window.innerHeight / 2;
    return [x, y];
}

let angle: number;
let turning_factor: complex;

function draw(midpoint: complex, iter: number){
    if (iter >= sliders.steps.value) {
        return;
    }
    let scalingFactor = Math.pow(sliders.length.value, iter)
    let newCplx = new complex(0, scalingFactor);
    for (let i = 0; i < sliders.arms.value; i++) {
        canvas.ctx.beginPath();
        canvas.ctx.moveTo(...complexToCoords(midpoint));
        let newCoords = complexToCoords(newCplx.add(midpoint));
        canvas.ctx.lineTo(...newCoords);
        canvas.ctx.stroke();
        canvas.ctx.closePath();
        canvas.ctx.arc(...newCoords, scalingFactor * 3, 0, 2 * Math.PI);
        canvas.ctx.fill();
        newCplx = newCplx.mult(turning_factor);
        draw(midpoint.add(newCplx), iter + 1);
    }

}
function drawAll(){
    canvas.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    canvas.ctx.fillStyle = "rgb(200, 200, 200)";
    canvas.ctx.strokeStyle = "rgb(200, 200, 200)";
    angle = Math.PI * 2 / sliders.arms.value;
    turning_factor = 
        new complex(Math.cos(angle), Math.sin(angle));
    draw(new complex(0, 0), 0);
}
export {
    drawAll,
}