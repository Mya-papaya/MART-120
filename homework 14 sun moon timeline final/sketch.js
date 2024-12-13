let time = 0;
let transitionSpeed = 0.005; // Slowed down for better clarity

function setup() {
  createCanvas(800, 600);
  noStroke();
}

function draw() {
  let dayPhase = time % 3;

  if (dayPhase < 1) {
    drawSunset(dayPhase);
  } else if (dayPhase < 2) {
    drawNight(dayPhase - 1);
  } else {
    drawDay(dayPhase - 2);
  }

  time += transitionSpeed;
}

function drawSunset(phase) {
  background(lerpColor(color(255, 150, 100), color(20, 30, 60), phase));
  drawHorizon();
  drawClouds();
  drawSun(height - (height * phase)); // Sun going down
}

function drawNight(phase) {
  background(lerpColor(color(20, 30, 60), color(0, 0, 0), phase));
  drawHorizon();
  drawStars();
  drawCrescentMoon(height / 2); // Crescent Moon at a fixed position
}

function drawDay(phase) {
  background(lerpColor(color(0, 0, 0), color(135, 206, 235), phase));
  drawHorizon();
  drawClouds();
  drawSun(height * phase); // Sun rising
}

function drawHorizon() {
  fill(34, 139, 34);
  rect(0, height - 100, width, 100); // Grass
  drawMountains(); // Mountains on horizon
}

function drawMountains() {
  fill(50, 50, 50);
  beginShape();
  vertex(0, height - 100);
  vertex(150, height - 300);
  vertex(300, height - 100);
  vertex(450, height - 250);
  vertex(600, height - 100);
  vertex(750, height - 200);
  vertex(800, height - 100);
  endShape(CLOSE);
}

function drawClouds() {
  fill(255);
  for (let i = 0; i < 5; i++) {
    ellipse((frameCount + i * 100) % width, 100 + i * 20, 60, 40);
  }
}

function drawStars() {
  for (let i = 0; i < 100; i++) {
    fill(255, 255, 255, 200); // Stars opacity
    ellipse(random(width), random(height), 2, 2); // Small stars
    fill(255, 255, 255, 150); // Slightly faded stars
    ellipse(random(width), random(height), 3, 3); // Medium stars
    fill(255, 255, 255, 100); // More faded stars
    ellipse(random(width), random(height), 4, 4); // Large stars
  }
}

function drawSun(yPos) {
  fill(255, 204, 0);
  ellipse(width / 2, yPos, 100, 100);
}

function drawCrescentMoon(yPos) {
  fill(255);
  arc(width / 2, yPos, 50, 50, PI / 4, 7 * PI / 4); // Main part of the moon
  fill(0);
  arc(width / 2 + 10, yPos, 50, 50, PI / 4, 7 * PI / 4); // Dark part to create crescent shape
}
