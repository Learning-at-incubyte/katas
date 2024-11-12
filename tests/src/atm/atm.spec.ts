import {beforeEach, describe, expect, it} from "vitest";
import {Atm} from "../../../src/atm/atm";

describe("Atm should", () => {
    let atm :Atm;
    beforeEach(()=>{
        atm = new Atm()
    })

    it('should be defined', () => {
        expect(atm).toBeDefined()
    })

})