var HDWalletProvider = require("truffle-hdwallet-provider");
var secure = require( "./secure.js");

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", 
      gas: 4710000, 
      from: "0x099c49de5bd2181ece5c3aa92576266254b45ba7"  //testprc main account here
    },
    ropsten: {
      provider: new HDWalletProvider(secure.mnemonic, "https://ropsten.infura.io/"+secure.infura_key),
      network_id: 3
    },
    testnet: {
      host: "localhost",
      port: 8545,
      network_id: 3,
      gas: 3000000,
      gasPrice: 21 * Math.pow(10 ,9),
      from: "0x8EaEB1AFE479B0C8a00dec48ccDDDEE9CdeBd014"     //ethereum testnet (ex: ropsten) main account 
    },
    mainnet: {
      host: "localhost",
      port: 8545,
      network_id: 1,
      gas: 4712388,
      from: "0x8EaEB1AFE479B0C8a00dec48ccDDDEE9CdeBd014"     //ethereum mainnet main account 
    }
  }
};
