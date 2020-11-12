var hr = hour;
var mn = minute;
var sc = second;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  text('Current hour:\n' + hr, 5, 50);
  text('Current minute: \n' + mn, 5, 50);
  text('Current second: \n' + sc, 5, 50);
}

function draw() {
  background(255,255,255);  
  scAngle = map(sc,0,60,0,360);
  hrAngle = map(hr,0,0,0,0);
  mnAngle = map(mn,0,00,0,0);
  arc(50, 55, 50, 50, 0, HALF_PI);
  noFill();
  arc(50, 55, 60, 60, HALF_PI, PI);
  arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
  arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
  drawSprites();
}