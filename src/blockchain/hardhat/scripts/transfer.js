const { ethers } = require('hardhat')

async function main () {
  const SkyGreenContract = await ethers.getContractAt('SkyGreenContract', "0xfc380A93d28D1B7B7134433F34C4Abf042D70EC5")
  await SkyGreenContract.safeMint(
    "0x70A792ad975Aa0977c6E9d55a14f5F2228bBC685",
    "werewrw",
    1,
    {value: 1}
  )
}

main()
  .then(() => {
    process.exit(0)
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
