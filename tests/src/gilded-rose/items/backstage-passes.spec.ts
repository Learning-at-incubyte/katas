import {describe, it, expect} from "vitest";
import {BackstagePasses} from "../../../../src/gilded-rose/items/backstage-passes";

describe('backstage passed item should', () => {
    it('decrease sellIn by 1', () => {
        const item = new BackstagePasses(10, 20);
        item.updateQuality();
        expect(item.sellIn).toBe(9);
    });

    it('increase quality by 2 when sellIn day are between 6 to 10', () => {
        const item = new BackstagePasses(9, 10);
        item.updateQuality()
        expect(item.quality).toBe(12);
    });

    it('increase quality by 3 when sellIn days are between 1 to 5', () => {
        const item = new BackstagePasses(5, 10);
        item.updateQuality()
        expect(item.quality).toBe(13)
    })
});