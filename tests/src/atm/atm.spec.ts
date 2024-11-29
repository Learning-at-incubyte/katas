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

    it('use other quantity if ATM has no more bills or coins', () => {
        const expectedOutPut =
            '2 bills of 500.\n' +
            '3 bills of 200.\n' +
            '5 bills of 100.\n' +
            '12 bills of 50.\n' +
            '20 bills of 20.\n' +
            '50 bills of 10.\n' +
            '100 bills of 5.\n' +
            '250 coins of 2.\n' +
            '400 coins of 1.';

        atm.withdraw(5000)

        expect(console.log).toHaveBeenCalledWith(expectedOutPut)
    })

})