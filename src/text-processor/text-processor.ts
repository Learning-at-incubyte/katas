export  class TextProcessor {
    processText(text: string) {
        const clearWords = this.getClearWords(text)
        const wordsCountMap= this.getWordsCountsMap(clearWords);
        return  {
            totalWords: clearWords.length,
            wordsCountMap
        }
    }

    private getWordsCountsMap(words: string[]):Map<string, number> {
        const wordsCountMap:Map<string, number> = new Map()
        for (let word of words) {
            wordsCountMap.set(word, (wordsCountMap.get(word) || 0) + 1)
        }
        return wordsCountMap
    }

    private getClearWords(text: string):string[] {
        return  text.toLowerCase().match(/[a-z]+/g) || []
    }
}