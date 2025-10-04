import { ethers } from "ethers";

const CELO_RPC = "https://forno.celo.org";
const provider = new ethers.JsonRpcProvider(CELO_RPC);

const ADDRESS = "0xYourWalletAddressHere"; // <-- podmień na swój adres

async function main() {
  console.log("Listening for transactions from:", ADDRESS);

  provider.on("pending", async (txHash) => {
    try {
      const tx = await provider.getTransaction(txHash);
      if (tx && tx.from.toLowerCase() === ADDRESS.toLowerCase()) {
        console.log("New pending TX:", tx.hash, " → to:", tx.to);
      }
    } catch (err) {}
  });
}

main();
