export class PrimeFactor {
    public static generate(n: number): number[] {
        let factors: number[] = [];
        for (let divisor = 2; n > 1; divisor++) {
            while (n % divisor === 0) {
                factors.push(divisor);
                n /= divisor;
            }
        }
        return factors;
    }
}