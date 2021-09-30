import Robot from "./robot.type";

export default interface Cell {
    col: number,
    row: number,
    type: Robot | "Wall" | "empty";
}
