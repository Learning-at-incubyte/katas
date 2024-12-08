import {describe, it, expect} from "vitest";
import {BackstagePasses} from "../../../../src/gilded-rose/items/backstage-passes";

describe('backstage passed item should', () => {
    it('decrease sellIn by 1', () => {
        const item = new BackstagePasses('Aged Brie', 10, 20);
        item.updateQuality();
        expect(item.sellIn).toBe(9);
    });

    it('increase quality by 2 when sellIn day are between 6 to 10', () => {
        const item = new BackstagePasses('Aged Brie', 9, 10);
        item.updateQuality()
        expect(item.quality).toBe(12);
    });

    it('increase quality by 3 when sellIn days are between 1 to 5', () => {
        const item = new BackstagePasses('Aged Brie', 5, 10);
        item.updateQuality()
        expect(item.quality).toBe(13)
    })

    it('drop the quality to 0 when sellIn days are less than 0', () => {
        const item = new BackstagePasses('Aged Brie', 0, 10);
        item.updateQuality()
        expect(item.quality).toBe(0)
    })

    it('not increase quality beyond 50', () => {
        const item = new BackstagePasses('Aged Brie', 10, 50);
        item.updateQuality()
        expect(item.quality).toBe(50)
    });
});