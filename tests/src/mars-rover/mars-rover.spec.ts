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
})