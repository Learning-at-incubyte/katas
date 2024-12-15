import {describe, it, expect} from "vitest";
import {Conjured} from "../../../../src/gilded-rose/items/conjured";

describe('conjured item should', () => {
    it('decrease sellIn by 1 before sell date', () => {
        const item = new Conjured(10, 20);
        item.updateQuality();
        expect(item.sellIn).toBe(9);
    });

    it('decrease quality by 2 before sell data', () => {
        const item = new Conjured(10, 20);
        item.updateQuality();
        expect(item.quality).toBe(18);
    })

    it('decrease quality by 4 after sell date', () => {
        const item = new Conjured(0, 20);
        item.updateQuality();
        expect(item.quality).toBe(16);
    });
});