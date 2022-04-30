import { TradingBot } from "./TradingBot.js";
import { Wallet } from "./Wallet.js";

const tradingBot = new TradingBot(100)
const wallet = new Wallet()
wallet.setBalance(10000)
tradingBot.associateWallet(wallet)

var win = 0
var loss = 0
var final_net_worth = 0


for (let practice = 0; practice < 100; practice++) {
    for (let day = 1; day < 100; day++) {
        tradingBot.updateCoinsMarketValue()
        tradingBot.trade()
        
    }
    
    final_net_worth += wallet.balance + (wallet.coins * tradingBot.coinsValue)
    if (wallet.balance + (wallet.coins * tradingBot.coinsValue) >= 10000) {
        win += 1;
    } else {
        loss += 1;
    }
}

console.log("AFTER RUNNING 100 TIMES A TRADING BOT DURING 100 DAYS STARTING WITH BALANCE 10000: ")
console.log("WINS: ", win)
console.log("LOSSES: ", loss)
console.log("FINAL AVERAGE NET WORTH: ", final_net_worth/100)
    
