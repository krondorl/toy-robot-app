import SystemService from "./system.service";

let systemService = new SystemService();

test('the board is initialized', () => {
    for(let i: number = 0; i < 5; i++) {
        expect(systemService.board[i].length).toBe(5);

        for(let j: number = 0; j < 5; j++) {
          expect(systemService.board[i][j].type).toBe("empty");
        }
    }
});
