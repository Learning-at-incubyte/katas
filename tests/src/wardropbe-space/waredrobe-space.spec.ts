import {expect, describe, it} from "vitest";
import {WardrobeSpace} from "../../../src/wardrobe-space/waredrobe-space";

describe("find combination method should", () => {

    it('return unique combination of wardrobe elements that exactly fill the wall', () => {
        const expected = [
            [50, 50, 50, 50, 50],
            [100, 50, 50, 50],
            [50, 50, 75, 75],
            [100, 100, 50],
            [100,75, 75],
        ];
        expect(WardrobeSpace.findCombination(250)).toEqual(expected)
    })
});
