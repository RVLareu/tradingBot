import { Wallet } from "./Wallet.js"

export class TradingBot {
    constructor(initial_coin_value) {
        this.wallet = null
        this.coinsValue = initial_coin_value
        this.lastTradeValue = initial_coin_value

    }

    setCoinsValue(new_coin_value) {
        this.coinsValue = new_coin_value
    }

    updateCoinsMarketValue() {
        if (Math.random() > 0.5) {
            this.coinsValue += 5
        } else {
            if(this.coinsValue > 5) {
                this.coinsValue -= 5
            }
        }
    }

    trade() {
        if (this.lastTradeValue >= this.coinsValue) {
            var diff = this.lastTradeValue - this.coinsValue
            if (diff >= 0.05 * this.lastTradeValue) {
                this.sellCoins()
                this.lastTradeValue = this.coinsValue
            }
        } else {
            var diff =  this.coinsValue - this.lastTradeValue
            if (diff >= 0.05 * this.lastTradeValue) {
                this.buyCoins()
                this.lastTradeValue = this.coinsValue
            } 
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