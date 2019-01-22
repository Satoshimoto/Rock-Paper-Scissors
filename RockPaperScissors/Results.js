class Results {
    constructor() {
        let _results = [0, 0, 0, 0];
        this.showResults = () => _results;
    }

    // function checking the game result - 0 = rock, 1 = paper, 2 = scissors
    checkResults(playerChoice, enemieChoice) {
        if (playerChoice === enemieChoice[0]) return null;
        else if (playerChoice === 0) {
            if (playerChoice < enemieChoice[0] && enemieChoice[0] !== 2) return false;
            else return true;

        } else if (playerChoice === 1) {
            if (playerChoice < enemieChoice[0]) return false;
            else return true;

        } else if (playerChoice === 2) {
            if (playerChoice > enemieChoice[0] && enemieChoice[0] !== 1) return false;
            else return true;
        }
    }

    winGame(win) {
        this.showResults()[0]++;
        if (win === true) {
            this.showResults()[1]++;
            return 'YOU WIN';
        } else if (win === null) {
            this.showResults()[2]++;
            return 'YOU TIE';
        } else if (win === false) {
            this.showResults()[3]++;
            return 'YOU LOSE';
        }
    }


}