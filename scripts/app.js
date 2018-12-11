// on the canvas

const cvs = document.getElementById('canvas')
const ctx = cvs.getContext('2d')

// create the unit
const box = 32;

// load image
const ground = new Image();
ground.src = "images/ground.png";

const mouseImg = new Image();
mouseImg.src = "images/mouse.png";

let mouse1 = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box
}

const catImg = new Image();
catImg.src = "images/cat.png";

let cat1 = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box
}

// listen to what key is pressed or released
let downKeys = new Set();
document.addEventListener('keydown', event => {
    downKeys.add(event.key);
})
document.addEventListener('keyup', event => {
    downKeys.delete(event.key);
})

// draw everything to the canvas
function draw() {
    ctx.drawImage(ground, 0, 0)
    ctx.drawImage(mouseImg, mouse1.x, mouse1.y);
    ctx.drawImage(catImg, cat1.x, cat1.y);

    //move
    if (downKeys.has('s') && cat1.y < 17 * box) cat1.y += box;
    if (downKeys.has('w') && cat1.y > 3 * box) cat1.y -= box;
    if (downKeys.has('d') && cat1.x < 17 * box) cat1.x += box;
    if (downKeys.has('a') && cat1.x > box) cat1.x -= box;

    if (downKeys.has('k') && mouse1.y < 17 * box) mouse1.y += box;
    if (downKeys.has('i') && mouse1.y > 3 * box) mouse1.y -= box;
    if (downKeys.has('l') && mouse1.x < 17 * box) mouse1.x += box;
    if (downKeys.has('j') && mouse1.x > box) mouse1.x -= box;


    if (cat1.x == mouse1.x && cat1.y == mouse1.y) {
        alert('cat win!');
        clearInterval(game);

    }

}


// call draw function every 100 ms

let game = setInterval(draw, 100);



// on the whole screen

const cat = document.getElementById('cat');
const mouse = document.getElementById('mouse');

let catX = 0;
let catY = 0;
let mouseX = 0;
let mouseY = 0;

// move cat and mouse
function update() {

    // set how fast is the movement
    const catMove = downKeys.has('q') ? 3 : 1;
    const mouseMove = downKeys.has('u') ? 3 : 1;

    // keys and related movements
    if (downKeys.has('s')) {
        cat.style.top = (catY += catMove) + 'px'
    }
    if (downKeys.has('w')) {
        cat.style.top = (catY -= catMove) + 'px'
    }
    if (downKeys.has('d')) {
        cat.style.left = (catX += catMove) + 'px'
    }
    if (downKeys.has('a')) {
        cat.style.left = (catX -= catMove) + 'px'
    }
    if (downKeys.has('k')) {
        mouse.style.top = (mouseY += mouseMove) + 'px'
    }
    if (downKeys.has('i')) {
        mouse.style.top = (mouseY -= mouseMove) + 'px'
    }
    if (downKeys.has('l')) {
        mouse.style.left = (mouseX += mouseMove) + 'px'
    }
    if (downKeys.has('j')) {
        mouse.style.left = (mouseX -= mouseMove) + 'px'
    }

    window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);