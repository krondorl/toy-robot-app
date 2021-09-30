import SystemService from "./system.service";

let systemService = new SystemService();

describe('System Service', () => {
  test('the board is initialized', () => {
      for(let i: number = 0; i < 5; i++) {
          expect(systemService.board[i].length).toBe(5);

          for(let j: number = 0; j < 5; j++) {
            expect(systemService.board[i][j].type).toBe("empty");
          }
      }
  });

  test('the isRobot function is working', () => {
    expect(systemService.isRobot("")).toBe(false);
    expect(systemService.isRobot("robot")).toBe(false);
    expect(systemService.isRobot("xyz")).toBe(false);
    expect(systemService.isRobot("robot-NORTH")).toBe(true);
    expect(systemService.isRobot("robot-EAST")).toBe(true);
    expect(systemService.isRobot("robot-SOUTH")).toBe(true);
    expect(systemService.isRobot("robot-WEST")).toBe(true);
  });

  test('the report function is working', () => {
    expect(systemService.report()).toBe("");
  });
});