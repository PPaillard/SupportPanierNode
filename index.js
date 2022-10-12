const Basket = require('./Basket')
const CommandLine = require('./CommandLine')

const myBasket = new Basket()
myBasket.consoleInfos()

const plaid = new CommandLine("Plaid", 9.90, 3, "Super plaid tout doux ! Et pas cher")

myBasket.addArticle(plaid)

myBasket.consoleInfos()

const seat = new CommandLine("Need for Seat", 99.9, 1, "Need for Seat, siège for gamer")

myBasket.addArticle(seat)

myBasket.consoleInfos()
