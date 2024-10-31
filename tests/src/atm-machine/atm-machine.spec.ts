import {beforeEach, describe, expect, it, vi} from "vitest";
import {AtmMachine} from "../../../src/atm-machine/atm-machine";

describe('atm machine should', () => {
    const expectedOutput1 =
        '1 bill of 500.\n' +
        '2 bills of 200.\n' +
        '1 bill of 50.\n' +
        '1 bill of 20.\n' +
        '1 bill of 10.\n' +
        '1 coin of 5.\n' +
        '1 coin of 2.'

    const expectedOutput2 =
        '2 bills of 200.\n' +
        '1 bill of 20.\n' +
        '1 bill of 10.\n' +
        '2 coins of 2.'

    let atmMachine: AtmMachine;
    beforeEach(() => {
        atmMachine = new AtmMachine()
        vi.spyOn(console, 'log')
    });

    it.each([[987, expectedOutput1], [434, expectedOutput2]])('withdraw correct amount in bills', (amount: number, expectedOutput) => {

        atmMachine.withdraw(amount)

        expect(console.log).toHaveBeenCalledWith(expectedOutput)
    })
})