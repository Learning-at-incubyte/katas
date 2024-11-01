import {beforeEach, describe, expect, it, vi} from "vitest";
import {AtmMachine} from "../../../src/atm-machine/atm-machine";

describe('atm machine should', () => {

    const expectedOutput1 =
        '1 bill of 500.\n' +
        '2 bills of 200.\n' +
        '1 bill of 50.\n' +
        '1 bill of 20.\n' +
        '1 bill of 10.\n' +
        '1 bill of 5.\n' +
        '1 coin of 2.'

    const expectedOutput2 =
        '1 bill of 200.\n' +
        '2 bills of 100.\n' +
        '1 bill of 20.\n' +
        '1 bill of 10.\n' +
        '2 coins of 2.'

    const expectedOutput3 =
        '1 bill of 500.\n' +
        '3 bills of 100.\n' +
        '11 bills of 50.\n' +
        '18 bills of 20.\n' +
        '1 bill of 10.\n' +
        '1 bill of 5.'


    const expectedOutput4 =
        '47 bills of 10.\n' +
        '98 bills of 5.\n' +
        '247 coins of 2.\n' +
        '371 coins of 1.'

    let atmMachine: AtmMachine;
    beforeEach(() => {
        atmMachine = new AtmMachine()
        vi.spyOn(console, 'log')
    });

    it.each([[987, expectedOutput1], [434, expectedOutput2], [1725, expectedOutput3],[1825, expectedOutput4]], )('withdraw correct amount for %i', (amount: number, expectedOutput) => {

        atmMachine.withdraw(amount)

        expect(console.log).toHaveBeenCalledWith(expectedOutput)
    })

    it('throw an error when the atm machine has not enough money', () => {
        expect(() => atmMachine.withdraw(10000)).toThrowError('The ATM machine has not enough money, please go to the nearest atm machine.')
    })
})