/**
 * Wallet has a balance (money) and an amount of coins (not related to the balance). Moneey
 * from the balance can be used to buy more coins. When selling coins, balance is increased.
 */

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
    takeFromBalance(balance_to_take) {
        if (balance_to_take <= this.balance) {
            this.balance -= balance_to_take
        }
    }

    takeFromCoins(coins_to_take) {
        if (coins_to_take <= this.coins) {
            this.coins -= coins_to_take
        }
    }

    setCoins(new_coins) {
        this.coins = new_coins
    }

    addToCoins(coins_to_add) {
        this.coins += coins_to_add
    }
}