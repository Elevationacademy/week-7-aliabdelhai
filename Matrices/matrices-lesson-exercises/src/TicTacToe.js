const Matrix = require("./Matrix");



class TicTacToe extends Matrix {
    loadBoard() {
        this.matrix = this.generateMatrix(3, 3)
        this.player = 1;
    }

    generateMatrix(numRows, numColumns){
        let matrix = []
        for (let r = 0; r < numRows; r++) {
            matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                matrix[r].push('.')
            }
        }
        return matrix
    }

    play(rowNum, columnNum, player) {

        const winningConditions = [
            [[0,0], [0,1], [0,2]],
            [[1,0], [1,1], [1,2]],
            [[2,0], [2,1], [2,2]],
            [[0,0], [1,0], [2,0]],
            [[0,1], [1,1], [2,1]],
            [[0,2], [1,2], [2,2]],
            [[0,0], [1,1], [2,2]],
            [[2,0], [1,1], [0,2]],

        ]
        if(super.get(rowNum, columnNum) != '.'){
            console.log('You are playing on a position thats already been played.');
            return;
        }
        if(this.player != player) {
            console.log('its not your turn!')
            return;
        }

        player == 1 ? super.alter(rowNum, columnNum, 'x') : super.alter(rowNum, columnNum, 'o')
        this.player = player == 1 ? 2 : 1

        let roundWon = false;
        let winner;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            
            let a = super.get(winCondition[0][0], winCondition[0][1]);
            let b = super.get(winCondition[1][0], winCondition[1][1]);
            let c = super.get(winCondition[2][0], winCondition[2][1]);
        
            if (a === '.' || b === '.' || c === '.') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                winner = player;
                break
            }
        }

        if (roundWon) {
            console.log(`Congratulations Player ${winner}`)
            this.loadBoard()
            this.player = 1
        }


    }
   
}



let board = new TicTacToe()
board.loadBoard()

board.play(2, 2, 1)
board.play(0, 0, 2)
board.play(0, 2, 1)
board.play(1, 0, 2)
board.play(1, 2, 1) //prints Congratulations Player 1

board.print()
//prints
// o       .       x
// o       .       x
// .       .       x
