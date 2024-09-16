import {expect, describe, vi, it, beforeEach, afterEach} from "vitest";
import {FizzBuzz} from "../../../src/fizz-buzz/fizz-buzz";

describe("print fizz buzz should", () => {
    beforeEach(() => {
        vi.spyOn(console, 'log');
    })

    afterEach(() => {
        vi.restoreAllMocks();
    })

    it("print a number itself", () => {
        FizzBuzz.printFizzBuzz();
        expect(console.log).toHaveBeenNthCalledWith(1, 1);
        expect(console.log).toHaveBeenNthCalledWith(2, 2);
    });

    it("print fizz when the number is divisible by 3", () => {
        FizzBuzz.printFizzBuzz();
        expect(console.log).toHaveBeenNthCalledWith(3, "Fizz");
        expect(console.log).toHaveBeenNthCalledWith(6, "Fizz");
        expect(console.log).toHaveBeenNthCalledWith(9, "Fizz");
    })

    it("print buzz when the number is divisible by 5", () => {
        FizzBuzz.printFizzBuzz();
        expect(console.log).toHaveBeenNthCalledWith(5, "Buzz");
        expect(console.log).toHaveBeenNthCalledWith(10, "Buzz");
        expect(console.log).toHaveBeenNthCalledWith(20, "Buzz");
    })

    it("print fizzbuzz when the number is divisible by 3 and 5", () => {
        FizzBuzz.printFizzBuzz();
        expect(console.log).toHaveBeenNthCalledWith(15, "FizzBuzz");
        expect(console.log).toHaveBeenNthCalledWith(30, "FizzBuzz");
        expect(console.log).toHaveBeenNthCalledWith(45, "FizzBuzz");
    })
});
