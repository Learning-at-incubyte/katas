export class MarsRover {
    private readonly x: number;
    private readonly y: number;
    private direction: string

    constructor() {
        this.x = 0
        this.y = 0
        this.direction = 'N'
    }

    execute(_command: string) {
        for (const commandElement of _command) {
            if (commandElement === 'L') {
                this.turnLeft()
            } else if (commandElement === 'R') {
                this.turnRight()
            }
        }
        return `${this.x}:${this.y}:${this.direction}`
    }

    private turnLeft() {
        const directionMap = {
            'N': 'W',
            'S': 'E',
            'E': 'N',
            'W': 'S'
        }
        this.direction = directionMap[this.direction]
    }

    private turnRight() {
        const directionMap = {
            'N': 'E',
            'S': 'W',
            'E': 'S',
            'W': 'N'
        }
        this.direction = directionMap[this.direction]
    }
}