export  class TextProcessing{
    getMostCommonWords(text: string) {
        const wordsCountMaps:Map<string, number> = new Map()
        const words = text.toLowerCase().split(' ')
        for (let word of words){
            word = word.replace(/[^a-zA-Z0-9]/g,"")
            if(wordsCountMaps.has(word)){
                wordsCountMaps.set(word, wordsCountMaps.get(word)+1)
            }else{
                wordsCountMaps.set(word, 1)
            }
        }
        return wordsCountMaps
    }
}