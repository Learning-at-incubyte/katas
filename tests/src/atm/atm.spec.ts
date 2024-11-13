import {beforeEach, describe, expect, vi, it} from "vitest";
import {Atm} from "../../../src/atm/atm";

describe("Atm should", () => {
    let atm: Atm;
    beforeEach(() => {
        atm = new Atm()
        vi.spyOn(console, 'log')
    })

    it('should be defined', () => {
        expect(atm).toBeDefined()
    })

    it('withdraw correct amount', () => {
        const expectedOutPut =
            '2 bills of 200.\n' +
            '1 bill of 20.\n' +
            '1 bill of 10.\n' +
            '2 coins of 2.'

        atm.withdraw(434)

        expect(console.log).toHaveBeenCalledWith(expectedOutPut)
    })

    it('throw an error when the atm machine has not enough money', () => {
        expect(() => atm.withdraw(10000)).toThrowError('The ATM machine has not enough money, please go to the nearest atm machine.')
    })

})