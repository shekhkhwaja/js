let canvas=document.querySelector("canvas");
let pen=canvas.getContext("2d");

let snakecells=[[0,0]]
let cell=50
function draw() {
    for(let i of snakecells ){
        pen.fillStyle="red"
        pen.fillRect(i[0],i[1],cell,cell)
    } 
}
pen.fillRect(50,    10,50,50);