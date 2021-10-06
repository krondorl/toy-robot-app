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

    test('clear function', () => {
        systemService.clear();
        for(let i: number = 0; i < 5; i++) {
            for(let j: number = 0; j< 5; j++) {
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
       systemService.board[2][2].type = "robot-NORTH";
       expect(systemService.report()).toBe("3,3,NORTH");
       systemService.board[2][2].type = "empty";
       systemService.board[0][4].type = "robot-SOUTH";
       expect(systemService.report()).toBe("1,1,SOUTH");
    });

    test('left function', () => {
        systemService.board[0][4].type = "empty";
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

    test('isNorthWall function', () => {
        systemService.board[2][1].type = "wall";
        expect(systemService.isNorthWall(2, 2)).toBe(true);
        systemService.board[2][2].type = "empty";
        systemService.board[2][1].type = "empty";
        systemService.board[2][0].type = "robot-NORTH";
        systemService.board[2][4].type = "wall";
        expect(systemService.isNorthWall(2, 0)).toBe(true);
        systemService.board[2][4].type = "empty";
        expect(systemService.isNorthWall(2, 0)).toBe(false);
    });

    test('isSouthWall function', () => {
        systemService.board[2][1].type = "empty";
        expect(systemService.isSouthWall(2, 2)).toBe(false);
        systemService.board[2][3].type = "wall";
        expect(systemService.isSouthWall(2, 2)).toBe(true);
        systemService.clear();
        systemService.board[2][4].type = "robot-SOUTH";
        systemService.board[2][0].type = "wall";
        expect(systemService.isSouthWall(2, 4)).toBe(true);
    });

    test('isEastWall function', () => {
        systemService.clear();
        systemService.board[2][2].type = "robot-EAST";
        systemService.board[3][2].type = "wall";
        expect(systemService.isEastWall(2, 2)).toBe(true);
        systemService.clear();
        systemService.board[4][2].type = "robot-EAST";
        systemService.board[0][2].type = "wall";
        expect(systemService.isEastWall(4, 2)).toBe(true);
        systemService.board[0][2].type = "empty";
        expect(systemService.isEastWall(4, 2)).toBe(false);
    });

    test('isWestWall function', () => {
        systemService.clear();
        systemService.board[2][2].type = "robot-WEST";
        expect(systemService.isWestWall(2, 2)).toBe(false);
        systemService.board[1][2].type = "wall";
        expect(systemService.isWestWall(2, 2)).toBe(true);
        systemService.clear();
        systemService.board[0][2].type = "robot-WEST";
        systemService.board[4][2].type = "wall";
        expect(systemService.isWestWall(0, 2)).toBe(true);
    });

    test('isFrontWall function', () => {
        systemService.clear();
        systemService.board[2][2].type = "robot-NORTH";
        systemService.board[2][1].type = "wall";
        expect(systemService.isFrontWall(2, 2)).toBe(true);
        systemService.clear();
        systemService.board[2][2].type = "robot-SOUTH";
        systemService.board[2][3].type = "wall";
        expect(systemService.isFrontWall(2, 2)).toBe(true);
        systemService.clear();
        systemService.board[2][2].type = "robot-EAST";
        systemService.board[3][2].type = "wall";
        expect(systemService.isFrontWall(2, 2)).toBe(true);
        systemService.clear();
        systemService.board[2][2].type = "robot-WEST";
        systemService.board[1][2].type = "wall";
        expect(systemService.isFrontWall(2, 2)).toBe(true);
        systemService.clear();
        systemService.board[2][0].type = "robot-NORTH";
        systemService.board[2][4].type = "wall";
        expect(systemService.isFrontWall(2, 0)).toBe(true);
    });

    test('isRobotOnBoard function', () => {
        systemService.clear();
        expect(systemService.isRobotOnBoard()).toBe(false);
        systemService.board[2][2].type = "robot-NORTH";
        expect(systemService.isRobotOnBoard()).toBe(true);
    });

    test('moveNorth function', () => {
        systemService.clear();
        systemService.board[2][2].type = "robot-NORTH";
        systemService.moveNorth(2, 2);
        expect(systemService.board[2][1].type).toBe("robot-NORTH");
        expect(systemService.board[2][2].type).toBe("empty");
        systemService.clear();
        systemService.board[2][0].type = "robot-NORTH";
        systemService.moveNorth(2, 0);
        expect(systemService.board[2][4].type).toBe("robot-NORTH");
        expect(systemService.board[2][2].type).toBe("empty");
    });

    test('moveEast function', () => {
        systemService.clear();
        systemService.board[2][2].type = "robot-EAST";
        systemService.moveEast(2, 2);
        expect(systemService.board[3][2].type).toBe("robot-EAST");
        expect(systemService.board[2][2].type).toBe("empty");
        systemService.clear();
        systemService.board[4][2].type = "robot-EAST";
        systemService.moveEast(4, 2);
        expect(systemService.board[0][2].type).toBe("robot-EAST");
        expect(systemService.board[4][2].type).toBe("empty");
    });

    test('moveSouth function', () => {
        systemService.clear();
        systemService.board[2][2].type = "robot-SOUTH";
        systemService.moveSouth(2, 2);
        expect(systemService.board[2][3].type).toBe("robot-SOUTH");
        expect(systemService.board[2][2].type).toBe("empty");
        systemService.clear();
        systemService.board[2][4].type = "robot-SOUTH";
        systemService.moveSouth(2, 4);
        expect(systemService.board[2][0].type).toBe("robot-SOUTH");
        expect(systemService.board[2][4].type).toBe("empty");
    });

    test('moveWest function', () => {
        systemService.clear();
        systemService.board[2][2].type = "robot-WEST";
        systemService.moveWest(2, 2);
        expect(systemService.board[1][2].type).toBe("robot-WEST");
        expect(systemService.board[2][2].type).toBe("empty");
        systemService.clear();
        systemService.board[0][2].type = "robot-WEST";
        systemService.moveWest(0, 2);
        expect(systemService.board[4][2].type).toBe("robot-WEST");
        expect(systemService.board[0][2].type).toBe("empty");
    });
});
