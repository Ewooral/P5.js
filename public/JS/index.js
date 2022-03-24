const { text } = require("express");

let num = 60;
let mx = [];
let my = [];

function setup(num = 60) {
  createCanvas(2156, 2156);
  noStroke();
  fill(255, 153);
  for (let i = 0; i < num; i++) {
    mx.push(i);
    my.push(i);
  }
  
}

function draw() {
  background(237, 34, 93);

  // Cycle through the array, using a different entry on each frame.
  // Using modulo (%) like this is faster than moving all the values over.
  let which = frameCount % num;
  mx[which] = mouseX;
  my[which] = mouseY;

  for (let i = 0; i < num; i++) {
    // which+1 is the smallest (the oldest in the array)
    let index = (which + 1 + i) % num;
    ellipse(mx[index], my[index], i, i);
  }


let hour = hours();
let minutes = minutes();
let seconds = seconds();

fill(255);
noStroke();
text(hour + ' ' + minutes + ' ' + seconds, 10, 200)


}
