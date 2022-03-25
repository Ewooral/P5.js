function setup(){
  let cv = createCanvas(200,200);
 
  noStroke();
  fill(102);

  cv.position(50, 100);
 
}


function draw() {
   background("red");
  rect(a++ % width, 10, 2, 80);
  
}
/**
 * arc(x, y, w, h, start, stop, [mode], [detail])
 */