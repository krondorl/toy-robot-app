import Cell from "../types/cell.type";

class SystemService {
    board: Cell[][];

    constructor() {
        this.board = [];

        for(let i: number = 0; i < 5; i++) {
            this.board[i] = [];
            for(let j: number = 0; j< 5; j++) {
                this.board[i][j] = {
                    col: i,
                    row: (5 - j),
                    type: "empty"
                };
            }
        }
    }
}

export default SystemService;