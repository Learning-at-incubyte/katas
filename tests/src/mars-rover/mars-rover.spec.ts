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

    it.each([
        ['R', '0:0:E'],
        ['RR', '0:0:S'],
        ['RRR', '0:0:W'],
        ['RRRR', '0:0:N'],
    ])('rotate to right correctly for command: %s', (direction: string, output: string) => {
        expect(marsRover.execute(direction)).toEqual(output)
    })

    it.each([
        ['M', '0:1:N'],
        ['MRM', '1:1:E'],
        ['MMRMMLM', '2:3:N'],
        ['MRMLMRML', '2:2:N']
    ])('move correctly for command %s', (command: string, output: string) => {
        expect(marsRover.execute(command)).toEqual(output)
    })

    it.each([
        ['MMMMMMMMMM', '0:0:N'],
        ['MMRMMRMMLMMRM', '4:9:S'],
        ['MMRMMRRMMM', '9:2:W'],
        ['RMMMMMMMMMMM', '1:0:E']
    ])('handle wrap around when it reach to the end of the grid', (command: string, output: string) => {
        expect(marsRover.execute(command)).toEqual(output)
    })
})