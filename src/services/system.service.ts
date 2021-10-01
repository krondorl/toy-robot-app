import Cell from "../types/cell.type";

class SystemService {
    board: Cell[][];

    constructor() {
        this.board = [];

        for(let i: number = 0; i < 5; i++) {
            this.board[i] = [];
            for(let j: number = 0; j< 5; j++) {
                this.board[i][j] = {
                    col: (i + 1),
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
                    const row = this.board[i][j].row;
                    const col = this.board[i][j].col;
                    const direction = this.board[i][j].type.split("-");
                    return `${row},${col},${direction[1]}`;
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
            const translateRow = 5 - (+row);
            const translateCol = (+col) - 1;

            switch (this.board[translateCol][translateRow].type) {
                case "robot-NORTH":
                    this.board[translateCol][translateRow].type = "robot-WEST";
                    break;
                case "robot-EAST":
                    this.board[translateCol][translateRow].type = "robot-NORTH";
                    break;
                case "robot-SOUTH":
                    this.board[translateCol][translateRow].type = "robot-EAST";
                    break;
                case "robot-WEST":
                    this.board[translateCol][translateRow].type = "robot-SOUTH";
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
            const translateRow = 5 - (+row);
            const translateCol = (+col) - 1;

            switch (this.board[translateCol][translateRow].type) {
                case "robot-NORTH":
                    this.board[translateCol][translateRow].type = "robot-EAST";
                    break;
                case "robot-EAST":
                    this.board[translateCol][translateRow].type = "robot-SOUTH";
                    break;
                case "robot-SOUTH":
                    this.board[translateCol][translateRow].type = "robot-WEST";
                    break;
                case "robot-WEST":
                    this.board[translateCol][translateRow].type = "robot-NORTH";
                    break;
            }
        }
    }

    // // Check if there is a wall around the robot
    // isFrontWall(row: number, col: number): boolean {
    //     const checkCell = this.board[col][row].type;
    //       switch (checkCell) {
    //         case "robot-NORTH":
    //             if (this.board[col][row].type)
    //             break;
    //         case "robot-EAST":
    //             break;
    //         case "robot-SOUTH":
    //             break;
    //         case "robot-WEST":
    //             break;
    //     }

    //     return false;
    // }

    // move(): void {
    //     const report = this.report();
    //     if (report.length > 0) {
    //         const reportParts = report.split(",");
    //         const row = reportParts[0];
    //         const col = reportParts[1];

    //         switch (this.board[+col][+row].type) {
    //             case "robot-NORTH":
    //                 this.board[+col][+row].type = "robot-EAST";
    //                 break;
    //             case "robot-EAST":
    //                 this.board[+col][+row].type = "robot-SOUTH";
    //                 break;
    //             case "robot-SOUTH":
    //                 this.board[+col][+row].type = "robot-WEST";
    //                 break;
    //             case "robot-WEST":
    //                 this.board[+col][+row].type = "robot-NORTH";
    //                 break;
    //         }
    //     }
    // }
}

export default SystemService;