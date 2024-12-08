import { describe, it, expect } from "vitest";
import {Item} from "../../../../src/gilded-rose/items/items";

describe('items should', () => {
    it('be defined', () => {
        const item = new Item('normal-item', 2, 5);
        expect(item).toBeDefined();
        expect(item.name).toBe('normal-item');
        expect(item.sellIn).toBe(2);
        expect(item.quality).toBe(5);
    })
});