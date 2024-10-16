import {expect, describe, it, beforeEach} from "vitest";
import {StringCalculator} from "../../../src/string-calculator/string-calculator";

describe("StringCalculator", () => {
    let stringCalculator: StringCalculator;

    beforeEach(() => {
        stringCalculator = new StringCalculator();
    });

    describe("Add method should", () => {

        it('return 0 for empty string', () => {
            expect(stringCalculator.add("")).toEqual(0);
        })

        it('return number itself if only one number is in string', () => {
            expect(stringCalculator.add("1")).toEqual(1);
        })

        it('return sum of numbers in string', () => {
            expect(stringCalculator.add("1,2")).toEqual(3);
        })

        it('return sum of numbers for unknown amount of input length', () => {
            expect(stringCalculator.add("1,2,3,4,5,6,7,8,9,10")).toEqual(55);
        })

    })
});