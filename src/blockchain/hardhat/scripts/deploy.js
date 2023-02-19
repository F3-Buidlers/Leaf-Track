const fs = require('fs')
const { ethers } = require('hardhat')

async function main () {
  var matic = toString(0.08)
  const SkyGreenContract = await ethers.getContractFactory('SkyGreenContract')
  const skyGreenContract = await SkyGreenContract.deploy(/*{value: 0.02, gasLimit: 250000}*/)
  await skyGreenContract.deployed()
  console.log('Green Sky contract was deployed to: ' + skyGreenContract.address)
  console.log('Green Sky contract was deployein to block number: ' + await skyGreenContract.provider.getBlockNumber())
    
  const addresses = [
    { skygreenContract: skyGreenContract.address,
      blocknumber: await skyGreenContract.provider.getBlockNumber()
    },
  ]
  const addressesJSON = JSON.stringify(addresses)
  fs.writeFileSync('src/blockchain/environment/contract-address.json', addressesJSON)
}

main()
  .then(() => {
    process.exit(0)
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
