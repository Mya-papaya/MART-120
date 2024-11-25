let player;
let exitRect;
let score = 0;
let gameWon = false;
let objects = [];

let obstacleXs = [];
let obstacleYs = [];
let obstacleWidths = [];
let obstacleHeights = [];
let obstacleColors = [];
let obstacleSpeeds = [];
let obstacleDirections = [];

function setup() {
    createCanvas(600, 600);
    player = createPlayer();
    createObstacles(5); // Create at least 5 obstacles
    exitRect = createExit();
}

function draw() {
    background(0);
    if (!gameWon) {
        movePlayer();
        drawPlayer();
        moveObstacles();
        drawObstacles();
        drawBorders();
        drawExit();
        displayScore();
        drawObjects();
        increaseScore();
        if (playerCollidesWithExit()) {
            gameWon = true;
        }
    } else {
        displayYouWin();
    }
}

function createPlayer() {
    return { x: 50, y: 50, size: 50 };
}

function movePlayer() {
    if (keyIsDown(LEFT_ARROW)) {
        player.x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        player.x += 5;
    }
    if (keyIsDown(UP_ARROW)) {
        player.y -= 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
        player.y += 5;
    }
}

function drawPlayer() {
    fill(0, 0, 255);
    rect(player.x, player.y, player.size, player.size);
}

function mousePressed() {
    drawObject(mouseX, mouseY);
}

function drawObject(x, y) {
    let obj = {
        x: x,
        y: y,
        size: 20,
        color: color(random(255), random(255), random(255))
    };
    objects.push(obj);
}

function drawObjects() {
    for (let obj of objects) {
        fill(obj.color);
        ellipse(obj.x, obj.y, obj.size);
    }
}

function createObstacles(num) {
    for (let i = 0; i < num; i++) {
        obstacleXs[i] = random(width);
        obstacleYs[i] = random(height);
        obstacleWidths[i] = random(20, 60);
        obstacleHeights[i] = random(20, 60);
        obstacleColors[i] = color(random(255), random(255), random(255));
        obstacleSpeeds[i] = random(1, 5);
        obstacleDirections[i] = createVector(random(-1, 1), random(-1, 1)).normalize();
    }
}

function moveObstacles() {
    for (let i = 0; i < obstacleXs.length; i++) {
        obstacleXs[i] += obstacleDirections[i].x * obstacleSpeeds[i];
        obstacleYs[i] += obstacleDirections[i].y * obstacleSpeeds[i];

        // Change direction randomly to make movement more dynamic
        if (random(100) < 5) {
            obstacleDirections[i] = createVector(random(-1, 1), random(-1, 1)).normalize();
        }

        if (obstacleXs[i] > width) obstacleXs[i] = 0;
        if (obstacleXs[i] < 0) obstacleXs[i] = width;
        if (obstacleYs[i] > height) obstacleYs[i] = 0;
        if (obstacleYs[i] < 0) obstacleYs[i] = height;
    }
}

function drawObstacles() {
    for (let i = 0; i < obstacleXs.length; i++) {
        fill(obstacleColors[i]);
        rect(obstacleXs[i], obstacleYs[i], obstacleWidths[i], obstacleHeights[i]);
    }
}

function drawBorders() {
    stroke(255);
    strokeWeight(5);
    noFill();
    rect(0, 0, width, height);
}

function createExit() {
    return { x: 500, y: 500, size: 50 };
}

function drawExit() {
    fill(0, 255, 0);
    rect(exitRect.x, exitRect.y, exitRect.size, exitRect.size);
}

function playerCollidesWithExit() {
    return player.x < exitRect.x + exitRect.size &&
           player.x + player.size > exitRect.x &&
           player.y < exitRect.y + exitRect.size &&
           player.y + player.size > exitRect.y;
}

function displayScore() {
    fill(255);
    textSize(24);
    text('Score: ' + score, 10, 30);
}

function displayYouWin() {
    background(0, 255, 0);
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text('You Win!', width / 2, height / 2);
    textSize(24);
    text('Final Score: ' + score, width / 2, height / 2 + 40);
}

function increaseScore() {
    if (!gameWon) {
        score++;
    }
}
