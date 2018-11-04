
function walletFactory(initialBalance) {
    let balance = initialBalance;
    return {
        balance: initialBalance,
        transactions: [],
    }
}

function personFactory(name, age, wallet) {
    return {
        name,
        age,
        wallet,
        AddMoneyToBalance(money) {
            this.wallet.balance += money;
        },
        checkBalance() {
            console.log(this.wallet.balance);
        },
    };
}

const wallet1 = walletFactory(10);
const person1 = personFactory('benjamin', 31, wallet1);

person1.checkBalance();
person1.AddMoneyToBalance(5);
person1.checkBalance();

