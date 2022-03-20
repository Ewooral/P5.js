var angle = 0;

function setup() {
  createCanvas(200, 200);
    background(220);

  
}

function draw() {
  // rect(100, 50, 25, 75, 80);
  // // rect(x, y, w, h, [tl], [tr], [br], [bl])

  // line(20, 40, 25, 75)
  var x = map(cos(angle), -1, 1, 0, width);
  var y = map(sin(angle), -1, 1, 0, height);
  line(200, 200, x, y);

  fill("red")
  ellipse(x, y, 20, 20);

  angle +=0.03;

}

 // important functions