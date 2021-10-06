import Cell from "../types/cell.type";

class SystemService {
    board: Cell[][];

    constructor() {
        this.board = [];
        this.create();
    }

    create(): void {
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

    clear(): void {
        for(let i: number = 0; i < 5; i++) {
            for(let j: number = 0; j< 5; j++) {
                this.board[i][j].type = "empty";
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

    isNorthWall(col: number, row: number): boolean {
        if (row - 1 >= 0) {
            if (this.board[col][row - 1].type === "wall") {
                return true; 
            }
        } else {
            if (this.board[col][4].type === "wall") {
                return true; 
            }
        }

        return false;
    }

    isSouthWall(col: number, row: number): boolean {
        if (row + 1 <= 4) {
            if (this.board[col][row + 1].type === "wall") {
                return true; 
            }
        } else {
            if (this.board[col][0].type === "wall") {
                return true; 
            }
        }

        return false;
    }

    isEastWall(col: number, row: number): boolean {
        if (col + 1 <= 4) {
            if (this.board[col + 1][row].type === "wall") {
                return true; 
            }
        } else {
            if (this.board[0][row].type === "wall") {
                return true; 
            }
        }

        return false;
    }

    isWestWall(col: number, row: number): boolean {
        if (col - 1 >= 0) {
            if (this.board[col - 1][row].type === "wall") {
                return true; 
            }
        } else {
            if (this.board[4][row].type === "wall") {
                return true; 
            }
        }

        return false;
    }

    // Check if there is a wall around the robot
    // or the other side, based on direction
    isFrontWall(col: number, row: number): boolean {
        let isFrontWall = false;
        const checkCell = this.board[col][row].type;
          switch (checkCell) {
            case "robot-NORTH":
                isFrontWall = this.isNorthWall(col, row);
                break;
            case "robot-SOUTH":
                isFrontWall = this.isSouthWall(col, row);
                break;
            case "robot-EAST":
                isFrontWall = this.isEastWall(col, row);
                break;
            case "robot-WEST":
                isFrontWall = this.isWestWall(col, row);
                break;
        }

        return isFrontWall;
    }

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