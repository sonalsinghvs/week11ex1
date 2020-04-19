var cwidth = 640
var cheight = 400
var row = 10

function setup() {
  createCanvas(cwidth, cheight);
}

function draw() {
  background(0);
  strokeWeight(8);
  stroke(50);

  var x = 0;
  while (x <= cwidth) {
    fill(random(400), 0, random(400));
    ellipse(x, 350, 25, 25);
    x = x + 50;
  }

  for (var x = 0; x <= cwidth; x = x + 50) {
    fill(random(255), 0, random(255));
    ellipse(x, 300, 25, 25);
  }

  for (var x = 0; x <= cwidth; x += 100) {
    for (var y = 0; y <= cheight; y += 100) {
      fill(random(255), 0, random(255));
      triangle(x, y, 50, 50, 20, 20);
    }
  }
}
