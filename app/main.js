import { TradingBot } from "./TradingBot.js";
import { Wallet } from "./Wallet.js";

const tradingBot = new TradingBot(100)
const wallet = new Wallet()
wallet.setBalance(10000)
tradingBot.associateWallet(wallet)

var win = 0
var loss = 0

for (let practice = 0; practice < 100; practice++) {
    for (let day = 1; day < 11; day++) {
        console.log("DAY " + day)
        tradingBot.updateCoinsMarketValue()
        tradingBot.trade()
        
    }
    
    console.log("FINAL BALANCE: ", wallet.balance)
    console.log("FINAL COINS: ", wallet.coins)
    console.log("FINAL COINS VALUE IN WALLET: ", wallet.coins * tradingBot.coinsValue)
    console.log("FINAL NET WORTH: ", wallet.balance + (wallet.coins * tradingBot.coinsValue))
    if (wallet.balance + (wallet.coins * tradingBot.coinsValue >= 10000)) {
        win += 1;
    } else {
        loss += 1;
    }
}
console.log("WINS: ", win)
console.log("LOSSES: ", loss)
    
