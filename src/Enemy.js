class Enemy {
    constructor() {
        this.x = 1700;
        this.y = Math.floor((Math.random() * (h - 200)) + 100);

        this.draw();
    }

    draw() {
        let enemy = document.createElement('div');
        enemy.setAttribute('dataY', `d-${this.y}`);
        enemy.classList.add('enemy');

        enemy.style.left = `${this.x}px`;
        enemy.style.top = `${this.y}px`;

        gameArea.appendChild(enemy);
        
        setTimeout(() => {
            enemy.remove();
        }, 8000);
        
        this.animation(enemy);
    }

    animation(el) {
        let state = [0, 100, 200, 300];
        
        setInterval(() => {
            let rand = Math.floor(Math.random() * state.length);

            el.style.backgroundPosition = `${state[rand]}px 0`;
        }, 500);
    }
}