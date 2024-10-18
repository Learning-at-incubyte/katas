export class StringCalculator {

    add(input: string) {
        if (input.length === 0) return 0
        const {numbersString, delimiter} = this.extractDelimiters(input)
        const validInput = this.getValidInput(numbersString, delimiter)
        const validNumbers = validInput.split(delimiter).map(Number);
        console.log(validNumbers)
        return validNumbers.reduce((acc, number) => acc + number, 0);
    }

    private extractDelimiters(input: string) {
        let delimiter = ','
        let numbersString = input
        if (input.startsWith('//')) {
            const delimiterEndIndex = input.indexOf('\n')
            delimiter = input.substring(2, delimiterEndIndex)
            numbersString = input.substring(delimiterEndIndex + 1)
        }
        return {numbersString, delimiter}
    }

    private getValidInput(input: string, delimiter: string) {
        return input.replace(/\n/g, delimiter);
    }
}