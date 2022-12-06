import * as sliders from "./user_input/sliders.js";
import {complex} from "./complex.js";
import * as s from "./settings/settings.js";
import * as canvas from "./canvas.js";

function complexToCoords(c: complex): [number, number] {
    let x = c.real * s.RAD + window.innerWidth / 2;
    let y = c.img * s.RAD + window.innerHeight / 2;
    return [x, y];
}

let angle: number;
let half_turning_factor: complex;
let turning_factor: complex;

function draw(midpoint: complex, iter: number, startAngle: complex, scale: number){
    if (iter >= sliders.steps.value) {
        return;
    }
    for (let i = 0; i < sliders.arms.value; i++) {
        canvas.ctx.beginPath();
        canvas.ctx.moveTo(...complexToCoords(midpoint));
        let newCoords = complexToCoords(startAngle.add(midpoint));
        canvas.ctx.lineTo(...newCoords);
        canvas.ctx.stroke();
        canvas.ctx.closePath();
        canvas.ctx.arc(...newCoords, scale * 3, 0, 2 * Math.PI);
        canvas.ctx.fill();
        startAngle = startAngle.mult(turning_factor);
        draw(
            midpoint.add(startAngle), 
            iter + 1, 
            // startAngle.scalarMult(-sliders.length.value), 
            startAngle.mult(half_turning_factor).scalarMult(sliders.length.value), 
            scale * sliders.length.value
        );
    }

}
function drawAll(){
    canvas.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    canvas.ctx.fillStyle = "rgb(200, 200, 200)";
    canvas.ctx.strokeStyle = "rgb(200, 200, 200)";
    angle = Math.PI * 2 / sliders.arms.value;
    turning_factor = 
        new complex(Math.cos(angle), Math.sin(angle));
    half_turning_factor =
        new complex(Math.cos(angle / 2), Math.sin(angle / 2));
    draw(new complex(0, 0), 0, new complex(0, 1), 1);
}
export {
    drawAll,
}