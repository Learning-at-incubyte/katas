import {beforeEach, describe, expect, it} from "vitest";
import {TextProcessor} from "../../../src/text-processing/text-processor";


describe('text processing should', () => {
    let textProcessor :TextProcessor

    beforeEach(()=>{
        textProcessor = new TextProcessor();
    })

    it('count total words in text', ()=>{
        const text = "Hello, this is an example for you to practice. You should grab this text and make it as your test case."

        const result= textProcessor.processText(text);

        expect(result.totalWords).toEqual(21);
    })

    it('ignore case sensitivity while counting frequency of a word', ()=>{
        const text = 'Hello, hello, heLLO'

        const result =  textProcessor.processText(text)

        expect(result.wordsCountMap.get('hello')).toBe(3)
    })

    it('remove punctuation from the text while counting total words in the text', ()=>{
        const text = 'Hello, Good morning!'

        const result =  textProcessor.processText(text)

        expect(result.totalWords).toBe(3)
    })

    it('return 10 most common words from text correctly', () => {
        const text = "Hello, this is an example for you to practice. You should grab this text and make it as your test case."

        const result = textProcessor.processText(text);

        expect(result.topWords[0]).toContain('this');
        expect(result.topWords[1]).toContain('you');
        expect(result.topWords[2]).toContain('hello');
    })
})