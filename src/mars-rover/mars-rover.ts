export class MarsRover {
    private readonly x: number;
    private readonly y: number;
    private readonly direction: string

    constructor() {
        this.x = 0
        this.y = 0
        this.direction = 'N'
    }

    execute(_command: string) {
        return `${this.x}:${this.y}:${this.direction}`
    }
}