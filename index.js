function setup() {
  createCanvas(200, 200, document.getElementById("DemoCanvas"));
  pixelDensity(1);
  frameRate(5);
}

var r = 0;
var g = 0;
var b = 0;

function draw() {
  var yoff = random(255);
  loadPixels();
  for (var y = 0; y < height; y++) {
    var xoff = 0;
    for (var x = 0; x < width; x++) {
      var index = (x + y * width) * 4;
      pixels[index] = r;
      pixels[index+1] = g;
      pixels[index+2] = b;
      pixels[index+3] = noise(xoff, yoff) * 255;
      xoff += 0.02;
    }
    yoff += 0.02;
  }
  r = (r + 1) % 138;
  g = (g + 1) % 43;
  b = (b + 1) % 226;
  updatePixels();
}