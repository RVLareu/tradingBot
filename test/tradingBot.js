
import { Wallet } from "../app/Wallet.js";
import {expect} from "chai"

describe("Wallet", () => {
    describe("Creating The Wallet: ", () => {
        it("Should create a wallet with zero balance ", () => {
            const wallet =  new Wallet()
            var balance = wallet.balance
            expect(balance).to.equal(0)
        })
        it("should be created with zero coins ", () => {
            const wallet =  new Wallet()
            var coins = wallet.coins
            expect(coins).to.equal(0)
        })
    })
    describe("Setting values to the Wallet: ", () => {
        it("balance should be 10 after setting it to 10 ", ()=> {
            const wallet = new Wallet()
            wallet.setBalance(10)
            var balance = wallet.balance
            expect(balance).to.equal(10)
        })
        it("balance should be 10 after increasing it to 10 after creating a wallet ", ()=> {
            const wallet = new Wallet()
            wallet.addToBalance(10)
            var balance = wallet.balance
            expect(balance).to.equal(10)
        })
        it("coins should be 10 after setting it to 10 ", ()=> {
            const wallet = new Wallet()
            wallet.setCoins(10)
            var coins = wallet.coins
            expect(coins).to.equal(10)
        })
        it("coins should be 10 after increasing it to 10 after creating a wallet ", ()=> {
            const wallet = new Wallet()
            wallet.addToCoins(10)
            var coins = wallet.coins
            expect(coins).to.equal(10)
        })
    })
})