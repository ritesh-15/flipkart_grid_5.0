import { ethers } from "hardhat"

async function main() {
  const INTIAL_TOKNE_SUPPLY = 70000000000
  const INITIAL_TOKEN_SUPPLY_TO_ISSUER = 500

  const TokenContract = await ethers.getContractFactory("Token")
  const tokenContract = await TokenContract.deploy(INTIAL_TOKNE_SUPPLY)
  const tokenContractAddresss = await tokenContract.getAddress()

  const LoyaltyProgramContract = await ethers.getContractFactory(
    "LoyaltyProgram"
  )
  const loyaltyProgramContract = await LoyaltyProgramContract.deploy(
    tokenContractAddresss,
    ethers.parseEther(INITIAL_TOKEN_SUPPLY_TO_ISSUER.toString())
  )
  const loyaltyProgramAddress = await loyaltyProgramContract.getAddress()

  console.log(`Token Contract Address: ${tokenContractAddresss}`)
  console.log(`Loaylty Program Contract Address: ${loyaltyProgramAddress}`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
