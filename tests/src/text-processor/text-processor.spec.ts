import {beforeEach, describe, expect, it} from "vitest";
import {TextProcessor} from "../../../src/text-processor/text-processor";


describe('text processor', ()=>{
    let textProcessor: TextProcessor;

    beforeEach(()=>{
        textProcessor = new TextProcessor();
    })

    it('count total number of words in text', ()=>{
        const text = "hello good morning"

        const result = textProcessor.processText(text)

        expect(result).toBe(3)
    })

    it('ignore punctuation from the text while counting total words', ()=>{
        const text = "hello, good morning !"

        const result = textProcessor.processText(text)

        expect(result).toBe(3)
    })

    it('count frequency of word from the text', ()=>{
        const text = "hello, good morning vijay, good morning ajay"

        const result = textProcessor.processText(text)

        expect(result.wordsCountMap.get('hello')).toBe(1)
        expect(result.wordsCountMap.get('good')).toBe(2)
        expect(result.wordsCountMap.get('morning')).toBe(2)
        expect(result.wordsCountMap.get('vijay')).toBe(1)
        expect(result.wordsCountMap.get('ajay')).toBe(1)
    })
})