export class TradingBot {
    constructor(initial_coin_value) {
        this.wallet = null
        this.coinsValue = initial_coin_value
    }

    setCoinsValue(new_coin_value) {
        this.coinsValue = new_coin_value
    }
}