import {expect,describe,it} from "vitest";
import {PrimeFactor} from "../../../src/prime-factor/prime-factor";

describe("generate method should", () => {
    it("return empty list of prime factor for 1", () => {
        expect(PrimeFactor.generate(1)).toEqual([]);
    });

    it("return list of prime factor for 2", () => {
        expect(PrimeFactor.generate(2)).toEqual([2]);
    });

    it("return list of prime factor for 3", () => {
        expect(PrimeFactor.generate(3)).toEqual([3]);
    });

    it("return list of prime factor for 4", () => {
        expect(PrimeFactor.generate(4)).toEqual([2,2]);
    });


    it("should return a list of prime factors for 6", () => {
        expect(PrimeFactor.generate(6)).toEqual([2, 3]);
    });

    it("should return a list of prime factors for 9", () => {
        expect(PrimeFactor.generate(9)).toEqual([3, 3]);
    });

    it("should return a list of prime factors for 12", () => {
        expect(PrimeFactor.generate(12)).toEqual([2, 2, 3]);
    });

    it("should return a list of prime factors for 15", () => {
        expect(PrimeFactor.generate(15)).toEqual([3, 5]);
    });

    it("should return a list of prime factors for 28", () => {
        expect(PrimeFactor.generate(28)).toEqual([2, 2, 7]);
    });

});
