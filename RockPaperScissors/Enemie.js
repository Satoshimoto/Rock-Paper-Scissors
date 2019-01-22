class Enemie {
    constructor() {
        let _choice = ['ROCK', 'PAPER', 'SCISSORS'];
        this.showChoice = () => _choice;
    }

    randomChoice() {
        let random = Math.floor(Math.random() * this.showChoice().length);
        let atribute = this.showChoice()[random];
        return [random, atribute];
    }

}