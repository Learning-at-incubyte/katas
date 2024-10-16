export class StringCalculator {

    add(input: string) {
        if (input.length === 0) return 0
        const numbers = input.split(',').map(Number);
        return numbers.reduce((acc, number) => acc + number, 0);
    }
}