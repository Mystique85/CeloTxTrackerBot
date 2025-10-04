import "@nomicfoundation/hardhat-toolbox";
import 'dotenv/config';

export default {
  solidity: "0.8.20",
  networks: {
    celo: {
      url: "https://forno.celo.org",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
