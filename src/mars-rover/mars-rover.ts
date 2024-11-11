export class MarsRover {
    private x: number;
    private y: number;
    private direction: string
    private gridSize = 10;

    constructor() {
        this.x = 0
        this.y = 0
        this.direction = 'N'
    }

    execute(command: string) {
        for (const commandElement of command) {
            if (commandElement === 'L') {
                this.turnLeft()
            } else if (commandElement === 'R') {
                this.turnRight()
            } else {
                this.move()
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

    private move() {
        switch (this.direction) {
            case 'N':
                this.y = (this.y + 1) % this.gridSize
                break
            case 'S':
                this.y = (this.y - 1 + this.gridSize) % this.gridSize
                break
            case 'E':
                this.x = (this.x + 1) % this.gridSize
                break
            case 'W':
                this.x = (this.x - 1 + this.gridSize) % this.gridSize
                break
        }
    }
}