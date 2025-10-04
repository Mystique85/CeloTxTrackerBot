import "@nomicfoundation/hardhat-toolbox";

export default {
  solidity: "0.8.20",
  networks: {
    celo: {
      url: "https://forno.celo.org",
      accounts: ["0xPRIVATE_KEY_HERE"] // <-- podmień na swój klucz prywatny
    }
  }
};
