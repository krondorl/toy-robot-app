import SystemService from "./system.service";

let systemService = new SystemService();

describe('System Service', () => {
    test('board is initialized', () => {
        for(let i: number = 0; i < 5; i++) {
            expect(systemService.board[i].length).toBe(5);

            for(let j: number = 0; j < 5; j++) {
              expect(systemService.board[i][j].type).toBe("empty");
            }
        }
    });

    test('isRobot function', () => {
        expect(systemService.isRobot("")).toBe(false);
        expect(systemService.isRobot("robot")).toBe(false);
        expect(systemService.isRobot("xyz")).toBe(false);
        expect(systemService.isRobot("robot-NORTH")).toBe(true);
        expect(systemService.isRobot("robot-EAST")).toBe(true);
        expect(systemService.isRobot("robot-SOUTH")).toBe(true);
        expect(systemService.isRobot("robot-WEST")).toBe(true);
    });

    test('report function', () => {
       expect(systemService.report()).toBe("");
    });

    test('left function', () => {
        systemService.board[2][2].type = "robot-NORTH";
        systemService.left();
        expect(systemService.board[2][2].type).toBe("robot-WEST");
        systemService.left();
        expect(systemService.board[2][2].type).toBe("robot-SOUTH");
        systemService.left();
        expect(systemService.board[2][2].type).toBe("robot-EAST");
        systemService.left();
        expect(systemService.board[2][2].type).toBe("robot-NORTH");
    });

    test('right function', () => {
        systemService.board[2][2].type = "robot-NORTH";
        systemService.right();
        expect(systemService.board[2][2].type).toBe("robot-EAST");
        systemService.right();
        expect(systemService.board[2][2].type).toBe("robot-SOUTH");
        systemService.right();
        expect(systemService.board[2][2].type).toBe("robot-WEST");
        systemService.right();
        expect(systemService.board[2][2].type).toBe("robot-NORTH");
    });
});
