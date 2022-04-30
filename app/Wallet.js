

export class Wallet {
    constructor() {
        this.balance = 0
        this.coins = 0
    }

    setBalance(new_balance) {
        this.balance = new_balance
    }
 
    addToBalance(balance_to_add) {
        this.balance += balance_to_add
    }

    setCoins(new_coins) {
        this.coins = new_coins
    }
    addToCoins(coins_to_add) {
        this.coins += coins_to_add
    }
}