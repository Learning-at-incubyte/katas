export class WardrobeSpace {

    static findCombination(wallSize: number): number[][] {
        const combinations: number[][] = []
        const combination = []
        const wardrobeSizes = [50, 75, 100, 120]
        this.generateCombination(wardrobeSizes, wallSize, combination, combinations)
        return this.getUniqueCombinations(combinations);
    }

    private static getUniqueCombinations(combinations: number[][]) {
        const uniqueCombinations: number[][] = []
        for (const comb of combinations) {
            if (!uniqueCombinations.some(uniqueComb => this.isDuplicateArray(uniqueComb, comb))) {
                uniqueCombinations.push(comb)
            }
        }
        return uniqueCombinations;
    }

    private static generateCombination(wardrobeSizes: number[], wallSize: number, combination: number[], combinations: number[][]) {
        if (wallSize < 0) {
            return;
        }
        if (wallSize === 0) {
            combinations.push([...combination])
            return
        }
        for (let i = 0; i < wardrobeSizes.length; i++) {
            combination.push(wardrobeSizes[i])
            this.generateCombination(wardrobeSizes, wallSize - wardrobeSizes[i], combination, combinations)
            combination.pop()
        }
    }

    private static isDuplicateArray(arr1: number[], arr2: number[]): boolean {
        arr1 = arr1.sort()
        arr2 = arr2.sort()
        return arr1.every((e, i) => e === arr2[i])
    }
}