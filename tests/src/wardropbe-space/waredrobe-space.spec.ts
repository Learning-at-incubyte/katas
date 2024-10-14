import {expect, describe, it, beforeEach} from "vitest";
import {WardrobeSpace} from "../../../src/wardrobe-space/waredrobe-space";

describe("WardrobeSpace", () => {
    let wardrobeSpace: WardrobeSpace;

    beforeEach(() => {
        wardrobeSpace = new WardrobeSpace();
    });

    describe("findCombination method should", () => {
        it('return unique combination of wardrobe elements that exactly fill the wall', () => {
            const expectedCombinations = [
                [50, 50, 50, 50, 50],
                [100, 50, 50, 50],
                [50, 50, 75, 75],
                [100, 100, 50],
                [100, 75, 75],
            ];

            expect(wardrobeSpace.findCombination(250)).toEqual(expectedCombinations);
        });
    });

    describe("findCheapestCombination method should", () => {
        it('return the cheapest combination of wardrobe elements that exactly fill the wall', () => {
            expect(wardrobeSpace.findCheapestCombination(250)).toEqual([100, 75, 75]);
        });
    });
});