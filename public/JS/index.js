function setup(){
  createCanvas(600,200);

}


function draw() {
  background(220, 0, 200);
  rect(30, 20, 25, 55, 89);

  let ac = arc(50, 100, 50, 50, 10, PI);
  ac.position(500, 20);
  
}
/** ARCH
 * .......................................................
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
  *
  * 
  ** ELLIPSE
  * .......................................................
  * Description
Draws an ellipse (oval) to the screen. By default, the first two parameters set the location of the center of the ellipse, 
and the third and fourth parameters set the shape's width and height. If no height is specified, the value of width is used for both the width and height. If a negative height or width is specified, the absolute value is taken.

An ellipse with equal width and height is a circle. The origin may be changed with the ellipseMode() function.

Syntax
ellipse(x, y, w, [h])
ellipse(x, y, w, h, [detail])
Parameters
x Number: x-coordinate of the center of ellipse.
y Number: y-coordinate of the center of ellipse.
w Number: width of the ellipse.
h Number: height of the ellipse. (Optional)
detail Integer: optional parameter for WebGL mode only. This is to specify the number of vertices that makes up the perimeter of the ellipse. Default value is 25. Won't draw a stroke for a detail of more than 50. (Optional)
 */

