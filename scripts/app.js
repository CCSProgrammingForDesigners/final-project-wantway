// the initial position of mouse and cat
let catX = 0;
let catY = 0;
let mouseX = 0;
let mouseY = 0;


const cat = document.getElementById('cat');
const mouse = document.getElementById('mouse');

// listen to what key is pressed or released
let downKeys = new Set();
document.addEventListener('keydown', event => {
    downKeys.add(event.key);
})
document.addEventListener('keyup', event => {
    downKeys.delete(event.key);
})

// move cat and mouse
function update() {

    // set how fast is the movement
    const catMove = downKeys.has('q') ? 10 : 1;
    const mouseMove = downKeys.has('u') ? 10 : 1;

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

// when cat meet mouse, say "Cat Win!!" and stop game

// game starts 30 seconds later