import {describe, beforeEach, it, expect} from "vitest";
import {MarsRover} from "../../../src/mars-rover/mars-rover";

describe('Mars rover should', () => {
    let marsRover: MarsRover
    beforeEach(() => {
        marsRover = new MarsRover()
    })

    it('start with 0:0:N initially', () => {
        expect(marsRover.execute('')).toBe('0:0:N')
    })

    it.each([
        ['L', '0:0:W'],
        ['LL', '0:0:S'],
        ['LLL', '0:0:E'],
        ['LLLL', '0:0:N'],
    ])('rotate to left correctly for command: %s', (turnTo: string, output: string) => {
        expect(marsRover.execute(turnTo)).toEqual(output)
    })
})