import Blockchain from "./blockchain.js"

function imprimeValor(value) {
  document.body.innerHTML = value
}


const handler = {
  get(target, property, receiver) {

    if (typeof window !== 'undefined') {
      imprimeValor(JSON.stringify(target.blocks))
    }
    return Reflect.get(...arguments)
  }
}

const blockchain = new Proxy(new Blockchain(3), handler)
blockchain.addBlock({ amount: 4 })
blockchain.addBlock({ amount: 50 })

console.log(blockchain.isValid()) // true
blockchain.blocks[1].data.amount = 30000 // ataque malicioso
console.log(blockchain.isValid()) // false