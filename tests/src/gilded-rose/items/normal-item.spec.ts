import {describe, it, expect} from "vitest";
import {NormalItem} from "../../../../src/gilded-rose/items/normal-item";

describe('normal item should', () => {
    it('decrease sellIn and quality by 1 before sell date', () => {
        const item = new NormalItem('normal', 10, 20);
        item.updateQuality();
        expect(item.sellIn).toBe(9);
        expect(item.quality).toBe(19);
    });

    it('decrease quality by 2 after sell date', () => {
        const item = new NormalItem('normal', 0, 20);
        item.updateQuality();
        expect(item.sellIn).toBe(-1);
        expect(item.quality).toBe(18);
    });

    it('not decrease quality below 0', () => {
        const item = new NormalItem('normal', 10, 0);
        item.updateQuality();
        expect(item.sellIn).toBe(9);
        expect(item.quality).toBe(0);
    });
});