enum CurrencyType {
    BILL = 'bill',
    BILLS = 'bills',
    COIN = 'coin',
    COINS = 'coins'
}

export class AtmMachine {

    private typeToValue = {
        [CurrencyType.BILLS]: [500, 200, 100, 50, 20, 10],
        [CurrencyType.COINS]: [5, 2, 1]
    };

    private MIN_BILL_AMOUNT = 10
    private MAX_COIN_AMOUNT = 5

    public withdraw(amount: number) {
        const output = []
        this.findAvailableBillAndCoin(amount, output)
        console.log(output.join('\n'))
    }

    private findAvailableBillAndCoin(amount: number, output: string[]) {
        if (!amount) {
            return
        }

        const availableAmount = this.findNearestAvailableAmount(amount)
        console.log('availableAmount: ' + availableAmount)
        console.log('amount: ' + amount)

        const countOfCurrency = Math.floor(amount / availableAmount)
        const amountType = this.getAmountType(availableAmount, countOfCurrency)
        output.push(`${countOfCurrency} ${amountType} of ${availableAmount}.`)
        const reminder = amount % availableAmount
        this.findAvailableBillAndCoin(reminder, output)
    }

    private findNearestAvailableAmount(amountToWithdraw: number): number {
        if (amountToWithdraw <= this.MIN_BILL_AMOUNT) {
            return this.typeToValue[CurrencyType.COINS].find(coinAmount => coinAmount <= amountToWithdraw);
        }
        return this.typeToValue[CurrencyType.BILLS].find(billAmount => billAmount <= amountToWithdraw);
    }

    private getAmountType(availableAmount: number, countOfCurrency: number): CurrencyType {
        if (availableAmount <= this.MAX_COIN_AMOUNT) {
            return countOfCurrency > 1 ? CurrencyType.COINS : CurrencyType.COIN;
        }
        return countOfCurrency > 1 ? CurrencyType.BILLS : CurrencyType.BILL;

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