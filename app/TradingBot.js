import { Wallet } from "./Wallet.js"

export class TradingBot {
    constructor(initial_coin_value) {
        this.wallet = null
        this.coinsValue = initial_coin_value
    }

    setCoinsValue(new_coin_value) {
        this.coinsValue = new_coin_value
    }

    // biased coin, market value should increase 60% of the time
    updateCoinsMarketValue() {
        if (Math.random() > 0.4) {
            this.coinsValue += 1
        } else {
            this.coinsValue -= 1
        }
    }

    associateWallet(wallet) {
        this.wallet = wallet
    }

    buyCoins() {
        var balanceAvailable = this.wallet.balance
        var coinsTobuy = balanceAvailable / this.coinsValue
        this.wallet.takeFromBalance(balanceAvailable)
        this.wallet.addToCoins(coinsTobuy)
    }


    sellCoins() {
        var coinsAvailable = this.wallet.coins
        var earningsFromSellingCoins = coinsAvailable * this.coinsValue
        this.wallet.addToBalance(earningsFromSellingCoins)
        this.wallet.takeFromCoins(coinsAvailable)
    }
}