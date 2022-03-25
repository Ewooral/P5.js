function setup(){
  let cv = createCanvas(600,200);
  cv.position(50, 100);
 
}


function draw() {
  background(200, 0, 200);
  // rect(a++ % width, 10, 2, 80);


  rec(100, 40, 25, 75);
  
}
/**
 * arc(x, y, w, h, start, stop, [mode], [detail])
 * 
 * Parameters
x Number: x-coordinate of the arc's ellipse
y Number: y-coordinate of the arc's ellipse
w Number: width of the arc's ellipse by default
h Number: height of the arc's ellipse by default
start Number: angle to start the arc, specified in radians
stop Number: angle to stop the arc, specified in radians
mode Constant: optional parameter to determine the way of drawing the arc. either CHORD, PIE or OPEN (Optional)
detail Integer: optional parameter for WebGL mode only. 
This is to specify the number of vertices that makes up the
perimeter of the arc. Default value is 25. Won't draw a stroke
for a detail of more than 50. (Optional)
 */

