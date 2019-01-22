class Game {
    constructor() {
        this.round = document.querySelector('.roundSection .round');
        this.wins = document.querySelector('.winContainer .win');
        this.ties = document.querySelector('.tiesContainer .ties');
        this.losses = document.querySelector('.loseContainer .lose');
        this.comChoice = document.querySelector('.game .enemie');
        this.showScore = document.querySelector('.game .borderScore');
        //
        this.computer = new Enemie();
        this.stats = new Results();
        //
        document.getElementById('rock').addEventListener('click', function () {
            this.startGame(0);
        }.bind(this));
        document.getElementById('paper').addEventListener('click', function () {
            this.startGame(1);
        }.bind(this));
        document.getElementById('scissors').addEventListener('click', function () {
            this.startGame(2);
        }.bind(this));
        //
    }

    gameUpdate(score) {
        this.round.textContent = this.stats.showResults()[0];
        this.wins.textContent = this.stats.showResults()[1];
        this.ties.textContent = this.stats.showResults()[2];
        this.losses.textContent = this.stats.showResults()[3];
        this.showScore.textContent = score;
        if (score === 'YOU WIN') this.showScore.style.color = 'green';
        else if (score === 'YOU LOSE') this.showScore.style.color = 'red';
        else this.showScore.style.color = 'white';
    }


    startGame(choice) {
        let compChoice = this.computer.randomChoice();
        let score = this.stats.winGame(this.stats.checkResults(choice, compChoice));
        this.comChoice.textContent = compChoice[1];
        this.gameUpdate(score);
    }

}

const game = new Game();