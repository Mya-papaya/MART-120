let player;
let obstacles = [];
let exitRect;
let score = 0;
let gameWon = false;
let objects = [];

function setup() {
    createCanvas(600, 600);
    player = createPlayer();
    createObstacles(5);
    exitRect = createExit();
}

function draw() {
    background(0);
    if (!gameWon) {
        movePlayer();
        drawPlayer();
        for (let obstacle of obstacles) {
            moveObstacle(obstacle);
            drawObstacle(obstacle);
        }
        drawBorders();
        drawExit();
        displayScore();
        drawObjects();
        increaseScore();
        if (playerCollidesWithExit()) {
            gameWon = true;
        }
    }
    if (gameWon) {
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
        let obstacle = {
            x: random(width),
            y: random(height),
            width: random(20, 60),
            height: random(20, 60),
            color: color(random(255), random(255), random(255))
        };
        obstacles.push(obstacle);
    }
}

function moveObstacle(obstacle) {
    obstacle.x += random([-2, 2]);
    obstacle.y += random([-2, 2]);
    if (obstacle.x > width) obstacle.x = 0;
    if (obstacle.x < 0) obstacle.x = width;
    if (obstacle.y > height) obstacle.y = 0;
    if (obstacle.y < 0) obstacle.y = height;
}

function drawObstacle(obstacle) {
    fill(obstacle.color);
    rect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
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
