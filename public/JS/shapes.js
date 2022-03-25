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
  * 
  * 
  * 
  ** ELLIPSE
  * .......................................................
  * 
  * Description
   Draws an ellipse (oval) to the screen. By default, the first two parameters set the location of the center of the ellipse, 
   and the third and fourth parameters set the shape's width and height. If no height is specified, the value of width is used for 
   both the width and height. If a negative height or width is specified, the absolute value is taken.

  An ellipse with equal width and height is a circle. The origin may be changed with the ellipseMode() function.

  Syntax
  ellipse(x, y, w, [h])
  ellipse(x, y, w, h, [detail])
  Parameters
  x Number: x-coordinate of the center of ellipse.
  y Number: y-coordinate of the center of ellipse.
  w Number: width of the ellipse.
  h Number: height of the ellipse. (Optional)
  detail Integer: optional parameter for WebGL mode only. This is to specify the number of vertices that makes up the 
  perimeter of the ellipse. Default value is 25. Won't draw a stroke for a detail of more than 50. (Optional)
  *
  *
  * 
  * 
  * 
  ** CIRCLE
  * .......................................................
  * 
  * Description
  Draws a circle to the screen. A circle is a simple closed shape. 
  It is the set of all points in a plane that are at a given distance 
  from a given point, the centre. This function is a special case of the ellipse() function, where the width and height of the ellipse are the same. Height and width of the ellipse correspond to the diameter of the circle. By default, the first two parameters set the location of the centre of the circle, the third sets the diameter of the circle.

  Syntax
  circle(x, y, d)
  Parameters
  x Number: x-coordinate of the centre of the circle.
  y Number: y-coordinate of the centre of the circle.
  d Number: diameter of the circle.
  *
  *
  * 
  * 
  * 
  ** LINE 
  * .......................................................
  * 
  * Description
  Draws a line (a direct path between two points) to the screen. If called with only 4 parameters, it will draw a line in 2D with a default width of 1 pixel. This width can be modified by using the strokeWeight() function. A line cannot be filled, therefore the fill() function will not affect the color of a line. So to color a line, use the stroke() function.

  Syntax
  line(x1, y1, x2, y2)
  line(x1, y1, z1, x2, y2, z2)
  Parameters
  x1 Number: the x-coordinate of the first point
  y1 Number: the y-coordinate of the first point
  x2 Number: the x-coordinate of the second point
  y2 Number: the y-coordinate of the second point
  z1 Number: the z-coordinate of the first point
  z2 Number: the z-coordinate of the second point
  *
  *
  * 
  * 
  * 
  * 
  * POINT
  * .......................................................
  * 
  * Description
  Draws a point, a coordinate in space at the dimension of one pixel. The first parameter is the horizontal value for the point, the second param is the vertical value for the point. The color of the point is changed with the stroke() function. The size of the point can be changed with the strokeWeight() function.

  Syntax
  point(x, y, [z])
  point(coordinate_vector)
  Parameters
  x Number: the x-coordinate
  y Number: the y-coordinate
  z Number: the z-coordinate (for WebGL mode) (Optional)
  coordinate_vector p5.Vector: the coordinate vector
  *
  *
  * 
  * 
  * 
  * 
  *  QUAD
  * .......................................................
  * 
  * Description
  Draws a quad on the canvas. A quad is a quadrilateral, a four sided polygon. It is similar to a rectangle, but the angles between its edges are not constrained to ninety degrees. The first pair of parameters (x1,y1) sets the first vertex and the subsequent pairs should proceed clockwise or counter-clockwise around the defined shape. z-arguments only work when quad() is used in WEBGL mode.

  Syntax
  quad(x1, y1, x2, y2, x3, y3, x4, y4, [detailX], [detailY])
  quad(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4, [detailX], [detailY])
  Parameters
  x1 Number: the x-coordinate of the first point
  y1 Number: the y-coordinate of the first point
  x2 Number: the x-coordinate of the second point
  y2 Number: the y-coordinate of the second point
  x3 Number: the x-coordinate of the third point
  y3 Number: the y-coordinate of the third point
  x4 Number: the x-coordinate of the fourth point
  y4 Number: the y-coordinate of the fourth point
  detailX Integer: number of segments in the x-direction (Optional)
  detailY Integer: number of segments in the y-direction (Optional)
  z1 Number: the z-coordinate of the first point
  z2 Number: the z-coordinate of the second point
  z3 Number: the z-coordinate of the third point
  z4 Number: the z-coordinate of the fourth point
  *
  *
  * 
  * 
  * 
  * 
  * 
  * RECT
  * .......................................................
  * 
  * Description
  Draws a rectangle on the canvas. A rectangle is a four-sided closed shape with every angle at ninety degrees. By default, the first two parameters set the location of the upper-left corner, the third sets the width, and the fourth sets the height. The way these parameters are interpreted, may be changed with the rectMode() function.

  The fifth, sixth, seventh and eighth parameters, if specified, determine corner radius for the top-left, top-right, lower-right and lower-left corners, respectively. An omitted corner radius parameter is set to the value of the previously specified radius value in the parameter list.

  Syntax
  rect(x, y, w, [h], [tl], [tr], [br], [bl])
  rect(x, y, w, h, [detailX], [detailY])
  Parameters
  x Number: x-coordinate of the rectangle.
  y Number: y-coordinate of the rectangle.
  w Number: width of the rectangle.
  h Number: height of the rectangle. (Optional)
  tl Number: optional radius of top-left corner. (Optional)
  tr Number: optional radius of top-right corner. (Optional)
  br Number: optional radius of bottom-right corner. (Optional)
  bl Number: optional radius of bottom-left corner. (Optional)
  detailX Integer: number of segments in the x-direction (for WebGL mode) (Optional)
  detailY Integer: number of segments in the y-direction (for WebGL mode) (Optional)
  *
  *
  * 
  * 
  * 
  * 
  * 
  * 
  * SQUARE
  * .......................................................
  * 
  * Description
  Draws a square to the screen. A square is a four-sided shape with 
  every angle at ninety degrees, and equal side size. This function 
  is a special case of the rect() function, where the width and height
   are the same, and the parameter is called "s" for side size. 
  By default, the first two parameters set the location of the 
  upper-left corner, the third sets the side size of the square.
  The way these parameters are interpreted, may be changed with the rectMode() function.

  The fourth, fifth, sixth and seventh parameters, if specified, determine corner radius for the top-left, top-right, lower-right and lower-left corners, respectively. An omitted corner radius parameter is set to the value of the previously specified radius value in the parameter list.

  Syntax
  square(x, y, s, [tl], [tr], [br], [bl])
  Parameters
  x Number: x-coordinate of the square.
  y Number: y-coordinate of the square.
  s Number: side size of the square.
  tl Number: optional radius of top-left corner. (Optional)
  tr Number: optional radius of top-right corner. (Optional)
  br Number: optional radius of bottom-right corner. (Optional)
  bl Number: optional radius of bottom-left corner. (Optional)
  *
  *
  * 
  * 
  * 
  * 
  * 
  * 
  * 
  * TRIANGLE
  * .......................................................
  * 
  * Description
  Draws a triangle to the canvas. A triangle is a plane created by 
  connecting three points. The first two arguments specify the first point, 
  the middle two arguments specify the second point, and the last two
  arguments specify the third point.

  Syntax
  triangle(x1, y1, x2, y2, x3, y3)
  Parameters
  x1 Number: x-coordinate of the first point
  y1 Number: y-coordinate of the first point
  x2 Number: x-coordinate of the second point
  y2 Number: y-coordinate of the second point
  x3 Number: x-coordinate of the third point
  y3 Number: y-coordinate of the third point

 */

