class Match {

    player1 = { setScore: 0, gameScore: 0 };
    player2 = { setScore: 0, gameScore: 0 };
    finalResult = null;

    constructor(player1Name, player2Name) {
        this.player1.name = player1Name;
        this.player2.name = player2Name;
    }

    pointWonBy = playerName => {

        // check if the game already finished
        if (this.finalResult) return;

        const player = this.player1.name == playerName
            ? this.player1
            : this.player2.name == playerName
                ? this.player2 : null;

        if (!player) {
            console.error('Invalid player specified');
            return;
        }

        const anotherPlayer = player == this.player1 ? this.player2 : this.player1;

        // increase the game score
        player.gameScore++;
        const isTieBreak = player.setScore == 6 && anotherPlayer.setScore == 6;
        const endOfNormalGame = !isTieBreak && player.gameScore >= 4 && player.gameScore - anotherPlayer.gameScore >= 2;
        const endOfTieBreak = isTieBreak && player.gameScore >= 7 && player.gameScore - anotherPlayer.gameScore >= 2;
        if (endOfNormalGame || endOfTieBreak) {
            player.setScore++;
            player.gameScore = 0;
            anotherPlayer.gameScore = 0;

            // check for the end of the game
            if (player.setScore == 7 || (player.setScore == 6 && anotherPlayer.setScore <= 4)) {
                this.finalResult = `${player.name} won ${player.setScore}-${anotherPlayer.setScore}`;
            }
        }
    };


    score = () => {
        if (this.finalResult) {
            return this.finalResult;
        }

        const setScore = `${this.player1.setScore}-${this.player2.setScore}`;
        const isTieBreak = this.player1.setScore == 6 && this.player2.setScore == 6;

        let gameScore;

        if (this.player1.gameScore == 0 & this.player2.gameScore == 0) {
            // empty game score
            gameScore = null;
        } else if (!isTieBreak && (this.player1.gameScore <= 2 || this.player2.gameScore <= 2)) {
            // normal game score (if at least one player has less than 40)
            gameScore = `${this.getTennisGameScoreByPoints(this.player1.gameScore)}-${this.getTennisGameScoreByPoints(this.player2.gameScore)}`;
        } else if (isTieBreak && (this.player1.gameScore <= 5 || this.player2.gameScore <= 5)) {
            // tie-break normal game score (if at least one player has less than 6)
            gameScore = `${this.player1.gameScore}-${this.player2.gameScore}`;
        } else if (this.player1.gameScore == this.player2.gameScore) {
            // deuce
            gameScore = 'Deuce';
        } else {
            // advantage
            gameScore = `Advantage ${this.player1.gameScore > this.player2.gameScore ? this.player1.name : this.player2.name}`;
        }

        return `${setScore}${gameScore ? `, ${gameScore}` : ''}`;
    };


    getTennisGameScoreByPoints = points => {
        switch (points) {
            case 0:
                return 0;
            case 1:
                return 15;
            case 2:
                return 30;
            case 3:
                return 40;
            default:
                return undefined;
        }
    };
}


module.exports = Match;