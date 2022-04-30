import { TradingBot } from "../app/TradingBot.js";
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
    })
})