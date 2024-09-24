import {expect,describe,it} from "vitest";
import {WardrobeSpace} from "../../../src/wardrobe-space/waredrobe-space";
describe("find combination should", () => {

    it('return combination of wardrobe elements that exactly fill the wall', () => {
        expect(WardrobeSpace.findCombination(250)).toEqual([[50,50,50,50,50],[75,75,75],[100,100,50],[120,120,10]])
    })
});
