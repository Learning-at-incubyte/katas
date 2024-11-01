enum CurrencyType {
    BILL = 'bill',
    COIN = 'coin',
}

interface Currency {
    value: number;
    type: CurrencyType;
    quantity: number;
}

const currencies: Currency[] = [
    {value: 500, type: CurrencyType.BILL, quantity: 2},
    {value: 200, type: CurrencyType.BILL, quantity: 3},
    {value: 100, type: CurrencyType.BILL, quantity: 5},
    {value: 50, type: CurrencyType.BILL, quantity: 12},
    {value: 20, type: CurrencyType.BILL, quantity: 20},
    {value: 10, type: CurrencyType.BILL, quantity: 50},
    {value: 5, type: CurrencyType.BILL, quantity: 100},
    {value: 2, type: CurrencyType.COIN, quantity: 250},
    {value: 1, type: CurrencyType.COIN, quantity: 500}
];

export class AtmMachine {

    public withdraw(amount: number) {
        const output: string[] = [];
        for (const currency of currencies) {
            if (amount <= 0) break;
            const count = this.getCurrencyCount(amount, currency);
            if (count > 0) {
                output.push(this.generateOutput(count, currency));
                amount = this.updateCurrency(amount, currency, count);
            }
        }

        if (amount > 0) {
            throw new Error('The ATM machine has not enough money, please go to the nearest atm machine.');
        }

        console.log(output.join('\n'));
        console.log(`ATM state after the withdrawal:`, currencies);
    }

    private getCurrencyCount(amount: number, currency: Currency): number {
        return Math.min(currency.quantity, Math.floor(amount / currency.value));
    }

    private updateCurrency(amount: number, currency: Currency, count: number): number {
        currency.quantity -= count;
        return amount - count * currency.value;
    }

    private generateOutput(count: number, currency: Currency): string {
        return `${count} ${count > 1 ? currency.type + 's' : currency.type} of ${currency.value}.`;
    }
}

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// rl.question('Enter amount to withdraw: ', (amount) => {
//     console.log(`Amount: ${amount}`);
//     new AtmMachine().withdraw(parseInt(amount))
//     rl.close();
// });