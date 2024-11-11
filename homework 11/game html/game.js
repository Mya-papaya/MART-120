const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const player = {
    x: 50,
    y: 50,
    size: 20,
    color: 'blue'
};

const obstacles = [
    { x: 100, y: 100, size: 30, color: 'red' },
    { x: 200, y: 150, size: 40, color: 'green' }
];

const staticObstacles = [];

const exit = {
    x: canvas.width - 50,
    y: canvas.height - 50,
    size: 30,
    color: 'yellow'
};

function drawRect(rect) {
    ctx.fillStyle = rect.color;
    ctx.fillRect(rect.x, rect.y, rect.size, rect.size);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawRect(player);
    drawRect(exit);
    obstacles.forEach(drawRect);
    staticObstacles.forEach(drawRect);
}

function movePlayer(event) {
    const key = event.key;
    if (key === 'ArrowUp') player.y -= 10;
    if (key === 'ArrowDown') player.y += 10;
    if (key === 'ArrowLeft') player.x -= 10;
    if (key === 'ArrowRight') player.x += 10;

    if (player.x < 0) player.x = canvas.width;
    if (player.x > canvas.width) player.x = 0;
    if (player.y < 0) player.y = canvas.height;
    if (player.y > canvas.height) player.y = 0;

    if (player.x >= exit.x && player.y >= exit.y) {
        alert('You Win!');
    }

    draw();
}

function moveObstacles() {
    obstacles.forEach(obstacle => {
        obstacle.x += Math.random() * 4 - 2;
        obstacle.y += Math.random() * 4 - 2;

        if (obstacle.x < 0) obstacle.x = canvas.width;
        if (obstacle.x > canvas.width) obstacle.x = 0;
        if (obstacle.y < 0) obstacle.y = canvas.height;
        if (obstacle.y > canvas.height) obstacle.y = 0;
    });
    draw();
}

function addStaticObstacle(event) {
    const rect = {
        x: event.clientX - canvas.offsetLeft,
        y: event.clientY - canvas.offsetTop,
        size: 20,
        color: 'purple'
    };
    staticObstacles.push(rect);
    draw();
}

document.addEventListener('keydown', movePlayer);
canvas.addEventListener('click', addStaticObstacle);

setInterval(moveObstacles, 100);

draw();
