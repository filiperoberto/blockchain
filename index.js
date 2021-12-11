import Blockchain from "./blockchain.js"

const blockchain = new Blockchain(3)
blockchain.addBlock({ amount: 4 })
blockchain.addBlock({ amount: 50 })

console.log(blockchain.isValid()) // true
blockchain.blocks[1].data.amount = 30000 // ataque malicioso
console.log(blockchain.isValid()) // false