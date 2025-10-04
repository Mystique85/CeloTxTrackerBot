import { ethers } from "hardhat";

async function main() {
  const TxRegister = await ethers.getContractFactory("TxRegister");
  const contract = await TxRegister.deploy();
  await contract.deployed();
  console.log("TxRegister deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
