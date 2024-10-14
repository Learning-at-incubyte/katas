export class WardrobeSpace {
    private readonly elementSizeToPrice = {
        50: 59,
        75: 62,
        100: 90,
        120: 111
    }
    private readonly wardrobeSizes = [50, 75, 100, 120]

    public findCombination(wallSize: number): number[][] {
        const combinations: number[][] = []
        const combination = []
        this.generateCombination(this.wardrobeSizes, wallSize, combination, combinations)
        return this.getUniqueCombinations(combinations);
    }

    public findCheapestCombination(wallSize: number): number[] {
        let cheapestCombination: number[] = [];
        let cheapestPrice = Infinity;
        const combinations = this.findCombination(wallSize);

        for (const combination of combinations) {
            const totalPrice = combination.reduce((sum, element) => sum + this.elementSizeToPrice[element], 0);
            console.log(`Combination: ${combination}, Price: ${totalPrice}`);
            if (totalPrice < cheapestPrice) {
                cheapestPrice = totalPrice;
                cheapestCombination = combination;
            }
        }

        return cheapestCombination;
    }

    private getUniqueCombinations(combinations: number[][]) {
        const uniqueCombinations: number[][] = []
        for (const comb of combinations) {
            if (!uniqueCombinations.some(uniqueComb => this.isDuplicateArray(uniqueComb, comb))) {
                uniqueCombinations.push(comb)
            }
        }
        return uniqueCombinations;
    }

    private generateCombination(
        wardrobeSizes: number[],
        wallSize: number,
        combination: number[],
        combinations: number[][]
    ) {
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

    private isDuplicateArray(arr1: number[], arr2: number[]): boolean {
        arr1 = arr1.sort()
        arr2 = arr2.sort()
        return arr1.every((e, i) => e === arr2[i])
    }
}