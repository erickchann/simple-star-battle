class Game {
    constructor() {
        this.score = 0;

        this.player = new Player();
        this.laser = [];

        this.listener();
        this.init();
        this.update();
    }

    init() {
        this.generateEnemy()
    }
    
    generateEnemy() {
        setInterval(() => {
            new Enemy();
        }, Math.random() * 1000 + 1000);
    }

    update() {
        setInterval(() => {
            const enemy = document.querySelectorAll('.enemy');
            const laser = document.querySelectorAll('.playerlaser');

            if (enemy.length >= 1 && laser.length >= 1) {
                laser.forEach((l, i) => {
                    enemy.forEach((e, j) => {
                        let lsr = l.getBoundingClientRect();
                        let eny = e.getBoundingClientRect();

                        if (lsr.x <= eny.x + eny.width && lsr.x + lsr.width >= eny.x && lsr.y <= eny.y + eny.height && lsr.y + lsr.height >= eny.y) {
                            laser[i].remove();
                            enemy[j].remove();
                            
                            this.score += 10;

                            score.innerHTML = `SCORE: ${this.score}`;
                        }
                    });
                });
            }
        }, 10);
    }

    listener() {
        document.addEventListener('mousemove', (e) => {
            let left = e.clientX - gameArea.offsetLeft - player.offsetWidth / 2;
            let right = e.clientY - gameArea.offsetTop - player.offsetHeight / 2;
            this.player.update(left, right);
        });

        document.addEventListener('keyup', (e) => {
            if (e.keyCode == 32) {
                new Laser(this.player.x + (player.offsetWidth), this.player.y + (player.offsetHeight / 2));
            }
        });
    }
}