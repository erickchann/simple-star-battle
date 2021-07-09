const player = document.querySelector('#player');
const gameArea = document.querySelector('#game-area');

const w = gameArea.offsetWidth;
const h = gameArea.offsetHeight;

window.onload = init();

function init() {
    game = new Game();
}