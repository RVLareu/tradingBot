import { TradingBot } from "../app/TradingBot.js";
import { Wallet } from "../app/Wallet.js";
import {expect} from "chai"

describe("Trading Bot", () => {
    describe("Creating the Trading Bot: ", () => {
        it("Should be created with no wallet asociated", () => {
            const tradingBot = new TradingBot(0)
            const tradingWallet = tradingBot.wallet
            expect(tradingWallet).to.equal(null)
        })
        it("Should be created with the coins initial value passed by argument", () => {
            const tradingBot = new TradingBot(10)
            const coinsValue = tradingBot.coinsValue
            expect(coinsValue).to.equal(10)
        })
    })

    describe("Setting values: ", () => {
        it("coins value should be updated after changing it", () => {
            const tradingBot = new TradingBot(0)
            tradingBot.setCoinsValue(10)
            const coinsValue = tradingBot.coinsValue
            expect(coinsValue).to.equal(10)
        })
        it("Should associate a wallet after setting it", () => {
            const tradingBot = new TradingBot(0)
            const wallet = new Wallet()
            tradingBot.associateWallet(wallet)
            const botWallet = tradingBot.wallet
            expect(botWallet).to.equal(wallet)
        })
    })

    describe("Bot updating wallet after purchasing/selling coins: ", () => {
        it("Should buy all coins possible updating the balance and coins", () => {
            const tradingBot = new TradingBot(1)
            const wallet = new Wallet()
            tradingBot.associateWallet(wallet)

            wallet.setBalance(10)
            tradingBot.buyCoins()
            
            var balance = wallet.balance
            var coins = wallet.coins

            expect(balance).to.equal(0)
            expect(coins).to.equal(10)
        })
        it("Shouldnt buy coins when the balance is zero", () => {
            const tradingBot = new TradingBot(10)
            const wallet = new Wallet()
            tradingBot.associateWallet(wallet)

            wallet.setBalance(0)
            tradingBot.buyCoins()

            var balance = wallet.balance
            var coins = wallet.coins

            expect(balance).to.equal(0)
            expect(coins).to.equal(0)
        })
        it("Should sell all coins possible updating the balance and coins", () => {
            const tradingBot = new TradingBot(1)
            const wallet = new Wallet()
            tradingBot.associateWallet(wallet)

            wallet.setCoins(10)
            tradingBot.sellCoins()
            
            var balance = wallet.balance
            var coins = wallet.coins

            expect(balance).to.equal(10)
            expect(coins).to.equal(0)
        })
    })
})