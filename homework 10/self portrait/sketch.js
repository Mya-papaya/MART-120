let xPos1, xPos2, yPos1, yPos2, diagX, diagY;
let xSpeed1, xSpeed2, ySpeed1, ySpeed2, diagSpeedX, diagSpeedY;
let titleSize, titleGrowing;
let nameX, nameY, nameDirection;
let headSize, headGrowing;

function setup() {
  createCanvas(400, 400);
  xPos1 = 50;
  xPos2 = 350;
  yPos1 = 50;
  yPos2 = 350;
  diagX = 50;
  diagY = 50;
  xSpeed1 = random(1, 3);
  xSpeed2 = random(1, 3);
  ySpeed1 = random(1, 3);
  ySpeed2 = random(1, 3);
  diagSpeedX = random(1, 3);
  diagSpeedY = random(1, 3);
  titleSize = 16;
  titleGrowing = true;
  nameX = 300;
  nameY = 380;
  nameDirection = 0;
  headSize = 150;
  headGrowing = true;
}

function draw() {
  background(189, 220, 255);
  
  // Moving shapes
  xPos1 += xSpeed1;
  xPos2 -= xSpeed2;
  yPos1 += ySpeed1;
  yPos2 -= ySpeed2;
  diagX += diagSpeedX;
  diagY += diagSpeedY;
  
  if (xPos1 > width || xPos1 < 0) {
    xSpeed1 *= -1;
    fill(random(255), random(255), random(255));
  }
  if (xPos2 > width || xPos2 < 0) {
    xSpeed2 *= -1;
    fill(random(255), random(255), random(255));
  }
  if (yPos1 > height || yPos1 < 0) {
    ySpeed1 *= -1;
    fill(random(255), random(255), random(255));
  }
  if (yPos2 > height || yPos2 < 0) {
    ySpeed2 *= -1;
    fill(random(255), random(255), random(255));
  }
  if (diagX > width || diagX < 0) {
    diagSpeedX *= -1;
    fill(random(255), random(255), random(255));
  }
  if (diagY > height || diagY < 0) {
    diagSpeedY *= -1;
    fill(random(255), random(255), random(255));
  }
  
  // Animate title size
  if (titleGrowing) {
    titleSize += 0.5;
    if (titleSize >= 24) titleGrowing = false;
  } else {
    titleSize -= 0.5;
    if (titleSize <= 16) titleGrowing = true;
  }

  // Move name in a square pattern
  if (nameDirection === 0) {
    nameX += 2;
    if (nameX >= 350) nameDirection = 1;
  } else if (nameDirection === 1) {
    nameY -= 2;
    if (nameY <= 330) nameDirection = 2;
  } else if (nameDirection === 2) {
    nameX -= 2;
    if (nameX <= 300) nameDirection = 3;
  } else if (nameDirection === 3) {
    nameY += 2;
    if (nameY >= 380) nameDirection = 0;
  }

  // Animate head size
  if (headGrowing) {
    headSize += 0.5;
    if (headSize >= 170) headGrowing = false;
  } else {
    headSize -= 0.5;
    if (headSize <= 150) headGrowing = true;
  }

  // Long Hair (behind face)
  fill(139, 69, 19);
  rect(120, 100, 160, 220);

  // Face
  fill(255, 224, 189);
  ellipse(200, 200, headSize, 200);

  // Eyes
  fill(255);
  ellipse(170, 180, 40, 20);
  ellipse(230, 180, 40, 20);
  fill(0);
  ellipse(170, 180, 10, 10);
  ellipse(230, 180, 10, 10);

  // Eyelashes
  stroke(0);
  line(160, 170, 150, 160);
  line(180, 170, 190, 160);
  line(240, 170, 250, 160);
  line(220, 170, 210, 160);

  // Eyebrows
  noFill();
  strokeWeight(3);
  arc(170, 160, 50, 20, PI, TWO_PI);
  arc(230, 160, 50, 20, PI, TWO_PI);

  // Nose
  fill(255, 224, 189);
  triangle(200, 190, 190, 240, 210, 240);

  // Cheekbones
  fill(255, 204, 203);
  ellipse(150, 220, 30, 20);
  ellipse(250, 220, 30, 20);

  // Mouth
  fill(255, 105, 180);
  arc(200, 260, 60, 30, 0, PI, CHORD);

  // Top Hair (bangs)
  fill(139, 69, 19);
  arc(200, 140, 160, 130, PI, TWO_PI);

  // Moving shapes (decorative elements)
  fill(0, 255, 0);
  ellipse(xPos1, 100, 20, 20);
  fill(255, 0, 0);
  ellipse(300, yPos1, 20, 20);

  fill(0, 0, 255);
  rect(xPos2 - 10, 300, 20, 20);
  fill(255, 255, 0);
  rect(100, yPos2 - 10, 20, 20);

  fill(255, 0, 255);
  ellipse(diagX, diagY, 30, 30);

  // Title and Signature
  fill(0);
  textSize(titleSize);
  text('Self-Portrait', 10, 20);
  textSize(16);
  text('By Mya', nameX, nameY);
}
