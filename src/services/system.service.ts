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

    isRobot(cellType: string): boolean {
        const robotTypes = ["robot-NORTH", "robot-EAST", "robot-SOUTH", "robot-WEST"];
        return robotTypes.includes(cellType);
    }

    report(): string {
        for(let i: number = 0; i < 5; i++) {
            for(let j: number = 0; j< 5; j++) {
                if (this.isRobot(this.board[i][j].type)) {
                    let direction = this.board[i][j].type.split("-");
                    return `${j},${i},${direction[1]}`;
                }
            }
        }

        return "";
    }
}

export default SystemService;