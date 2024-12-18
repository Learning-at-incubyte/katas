import {describe, it, expect} from "vitest";
import {BackstagePasses} from "../../../../src/gilded-rose/items/backstage-passes";

describe('backstage passed item should', () => {
    it('decrease sellIn by 1', () => {
        const item = new BackstagePasses(10, 20);
        item.updateQuality();
        expect(item.sellIn).toBe(9);
    });

    it('set quality to minimum after sellIn date', () => {
        const item = new BackstagePasses(0, 10);
        item.updateQuality()
        expect(item.quality).toBe(0)
    })

    it('increase quality by 2 when sellIn day are between 6 to 10', () => {
        const item = new BackstagePasses(9, 10);
        item.updateQuality()
        expect(item.quality).toBe(12);
    });

    it('increase quality by 3 when sellIn days are between 0 to 5', () => {
        const item = new BackstagePasses(1, 10);
        item.updateQuality()
        expect(item.quality).toBe(13)
    })

    it('not increase quality above 50', () => {
        const item = new BackstagePasses(5, 49);
        item.updateQuality()
        expect(item.quality).toBe(50)
    })
});