import {describe, it, expect} from "vitest";
import {AgedBrie} from "../../../../src/gilded-rose/items/aged-brie";

describe('aged brie item should', () => {
    it('decrease sellIn by 1 before sell date', () => {
        const item = new AgedBrie('Aged Brie', 10, 20);
        item.updateQuality();
        expect(item.sellIn).toBe(9);
    });

    it('increase quality by 1', () => {
        const item = new AgedBrie('Aged Brie', 0, 20);
        item.updateQuality()
        expect(item.quality).toBe(21);
    });

    it('not increase quality beyond 50', () => {
        const item = new AgedBrie('Aged Brie', 10, 50);
        item.updateQuality()
        expect(item.quality).toBe(50)
    });
});