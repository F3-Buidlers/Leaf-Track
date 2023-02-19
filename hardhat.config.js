require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-etherscan')
require('dotenv').config()

/**
 @type import('hardhat/config').HardhatUserConfig
**/

module.exports = {
  paths: {
    // se enrutan las fuentes del blockchain
    sources: './src/blockchain/hardhat/contracts',
    tests: './src/blockchain/hardhat/test',
    cache: './src/blockchain/hardhat/cache',
    artifacts: './src/blockchain/hardhat/artifacts'
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  },

  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
      forking: {
        url: process.env.GOERLI_RPC_URL,
        blockNumber: 7605882
      }
    },
    localhost: {},
    goerli: {
      url: process.env.GOERLI_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      saveDeployments: true
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  solidity: '0.8.15'
}
