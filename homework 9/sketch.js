function setup() {
    createCanvas(400, 400);
    background(189, 220, 255);
    
    // Long Hair (behind face)
    fill(139, 69, 19);  // Brown color
    rect(120, 100, 160, 220);  // Long hair
    
    // Face
    fill(255, 224, 189);  // Skin color
    ellipse(200, 200, 150, 200);  // x, y, width, height
    
    // Eyes
    fill(255);  // White of the eyes
    ellipse(170, 180, 40, 20);  // Left eye
    ellipse(230, 180, 40, 20);  // Right eye
    fill(0);  // Pupil color
    ellipse(170, 180, 10, 10);  // Left pupil
    ellipse(230, 180, 10, 10);  // Right pupil
    
    // Eyelashes
    stroke(0);
    line(160, 170, 150, 160);  // Left eyelashes
    line(180, 170, 190, 160);
    line(240, 170, 250, 160);  // Right eyelashes
    line(220, 170, 210, 160);
    
    // Eyebrows
    noFill();
    strokeWeight(3);
    arc(170, 160, 50, 20, PI, TWO_PI);  // Left eyebrow
    arc(230, 160, 50, 20, PI, TWO_PI);  // Right eyebrow
    
    // Nose
    fill(255, 224, 189);  // Same skin color
    triangle(200, 190, 190, 240, 210, 240);  // x1, y1, x2, y2, x3, y3
    
    // Cheekbones
    fill(255, 204, 203);  // Slightly pink color for cheekbones
    ellipse(150, 220, 30, 20);  // Left cheekbone
    ellipse(250, 220, 30, 20);  // Right cheekbone
    
    // Mouth
    fill(255, 105, 180);  // Pink color
    arc(200, 260, 60, 30, 0, PI, CHORD);  // A simple smile
    
    // Top Hair (bangs)
    fill(139, 69, 19);  // Brown color
    arc(200, 140, 160, 130, PI, TWO_PI);  // Top hair moved down for bangs
    
    // Title and Signature
    fill(0);
    textSize(16);
    text('Self-Portrait', 10, 20);
    text('By Mya', 300, 380);
  }
  