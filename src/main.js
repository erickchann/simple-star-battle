const player = document.querySelector('#player');
const gameArea = document.querySelector('#game-area');

const score = document.getElementById('score');

const w = gameArea.offsetWidth;
const h = gameArea.offsetHeight;


window.onload = init();

function init() {
    game = new Game();
}