const hre = require("hardhat")

const main = async () => {
  let waveCount
  let waveTx

  const [owner, randomPerson] = await hre.ethers.getSigners()
  const waveContractFactory = await hre.ethers.getContractFactory('WavePortal')
  const waveContract = await waveContractFactory.deploy()

  await waveContract.deployed()

  console.log("Contract was deployed to:", waveContract.address)
  console.log("Contract was deployed by:", owner.address)

  waveCount = await waveContract.getTotalWaves()

  waveTx = await waveContract.wave()
  await waveTx.wait()

  waveCount = await waveContract.getTotalWaves()

  waveTx = await waveContract.connect(randomPerson).wave()
  await waveTx.wait()

  waveCount = await waveContract.getTotalWaves()
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

runMain()
