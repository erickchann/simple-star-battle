class Laser {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.draw();
    }

    draw() {
        let laser = document.createElement('span');
        laser.setAttribute('dataY', `d-${this.y}`);
        laser.classList.add('playerlaser');

        laser.style.left = `${this.x}px`;
        laser.style.top = `${this.y}px`;

        gameArea.appendChild(laser);

        setTimeout(() => {
            laser.remove();
        }, 3000);
    }
}