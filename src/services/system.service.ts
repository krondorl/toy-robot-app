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

    left(): void {
        const report = this.report();
        if (report.length > 0) {
            const reportParts = report.split(",");
            const row = reportParts[0];
            const col = reportParts[1];

            switch (this.board[+col][+row].type) {
                case "robot-NORTH":
                    this.board[+col][+row].type = "robot-WEST";
                    break;
                case "robot-EAST":
                    this.board[+col][+row].type = "robot-NORTH";
                    break;
                case "robot-SOUTH":
                    this.board[+col][+row].type = "robot-EAST";
                    break;
                case "robot-WEST":
                    this.board[+col][+row].type = "robot-SOUTH";
                    break;
            }
        }
    }

    right(): void {
        const report = this.report();
        if (report.length > 0) {
            const reportParts = report.split(",");
            const row = reportParts[0];
            const col = reportParts[1];

            switch (this.board[+col][+row].type) {
                case "robot-NORTH":
                    this.board[+col][+row].type = "robot-EAST";
                    break;
                case "robot-EAST":
                    this.board[+col][+row].type = "robot-SOUTH";
                    break;
                case "robot-SOUTH":
                    this.board[+col][+row].type = "robot-WEST";
                    break;
                case "robot-WEST":
                    this.board[+col][+row].type = "robot-NORTH";
                    break;
            }
        }
    }
}

export default SystemService;