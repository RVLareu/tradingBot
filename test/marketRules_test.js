import { TradingBot } from "../app/TradingBot.js";
import { Wallet } from "../app/Wallet.js";
import {expect} from "chai"

describe("Market Rules and Bot trading", () => {
    describe("Bot Selling: ", () => {
        it("should sell all coins after 5% decrease from last trade value", () => {
            const tradingBot = new TradingBot(95)
            const wallet = new Wallet()
            tradingBot.associateWallet(wallet)
            wallet.setCoins(100)

            tradingBot.lastTradeValue = 100

            tradingBot.trade()

            var balance = wallet.balance
            var coins = wallet.coins

            expect(balance).to.equal(9500)
            expect(coins).to.equal(0)

        })

        it("should update last trade value after selling", () => {
            const tradingBot = new TradingBot(95)
            const wallet = new Wallet()
            tradingBot.associateWallet(wallet)
            wallet.setCoins(100)

            tradingBot.lastTradeValue = 100

            tradingBot.trade()

            var lastTradeValue = tradingBot.lastTradeValue

            expect(lastTradeValue).to.equal(95)

        })

    })
    describe("Bot Purchasing: ", () => {
        it("should purchase with all available balance after 5% increase from last trade value", () => {
            const tradingBot = new TradingBot(100)
            const wallet = new Wallet()
            tradingBot.associateWallet(wallet)
            wallet.setBalance(100)

            tradingBot.lastTradeValue = 95

            tradingBot.trade()

            var balance = wallet.balance
            var coins = wallet.coins

            expect(balance).to.equal(0)
            expect(coins).to.equal(1)

        })

        it("should update last trade value after buying", () => {
            const tradingBot = new TradingBot(100)
            const wallet = new Wallet()
            tradingBot.associateWallet(wallet)
            wallet.setBalance(100)

            tradingBot.lastTradeValue = 95

            tradingBot.trade()

            var lastTradeValue = tradingBot.lastTradeValue

            expect(lastTradeValue).to.equal(100)

        })

    })


})