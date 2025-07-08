import {beforeEach, describe, expect, it} from "vitest";
import {TextProcessing} from "../../../src/text-processing/text-processing";


describe('text processing should', () => {
    let textProcessing :TextProcessing

    beforeEach(()=>{
        textProcessing = new TextProcessing();
    })

    it('count words frequency correctly by ignoring space and punctuation in text', () => {
        const text = "Hello, this is an example for you to practice. You should grab this text and make it as your test case."
        const expectedFrequency = new Map([
            ['hello', 1],
            ['this', 2],
            ['is', 1],
            ['an', 1],
            ['example', 1],
            ['for', 1],
            ['you', 2],
            ['to', 1],
            ['practice', 1],
            ['should', 1],
            ['grab', 1],
            ['text', 1],
            ['and', 1],
            ['make', 1],
            ['it', 1],
            ['as', 1],
            ['your', 1],
            ['test', 1],
            ['case', 1]
        ])

        const result = textProcessing.getMostCommonWords(text);

        expect(result).toEqual(expectedFrequency);
    })


    it('return 10 most common words from text correctly', () => {
        const text = "Hello, this is an example for you to practice. You should grab this text and make it as your test case."
        const expectedWords = [
            'you',
            'this',
            'your',
            'to',
            'text',
            'test',
            'should',
            'practice',
            'make',
            'it'
        ]

        const result = textProcessing.getMostCommonWords(text);

        expect(result).toEqual(expectedWords);
    })
})