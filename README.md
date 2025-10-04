<!-- Typing effect for project name -->
<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Courier+Prime&weight=700&size=48&pause=800&color=32CD32&center=true&vCenter=true&width=600&lines=CeloTxTrackerBot" alt="CeloTxTrackerBot Typing SVG" />
</p>

<!-- Logo with shadow and rounded border -->
<p align="center">
  <span style="display: inline-block; border: 2px solid #ccc; padding: 12px; border-radius: 16px; background: linear-gradient(145deg, #f9f9f9, #e0e0e0); box-shadow: 5px 5px 15px rgba(0,0,0,0.2);">
    <img src="assets/logo.png" alt="CeloTxTrackerBot Logo" width="220"/>
  </span>
</p>

---

# 📖 Overview

CeloTxTrackerBot is a **lightweight, professional tool** for the Celo ecosystem:

- 🚀 Deploys a smart contract (`TxRegister.sol`) to Celo L1  
- 🔗 Allows users to register themselves on-chain  
- 🤖 Includes a Node.js bot that tracks outgoing transactions from a given address  
- 🔔 Optional integration with Discord/Telegram for real-time notifications  

---

# 🏆 Project Milestones

1. ✍️ Create Solidity smart contract `TxRegister`  
2. 📦 Deploy contract on Celo mainnet  
3. 🤖 Build Node.js bot to monitor transactions  
4. 🔔 Integrate bot with Discord/Telegram (optional)  

---

# 💻 Installation & Setup

Open **GitHub Codespaces** for this repository and run the following commands:

```bash
# Install dependencies
npm install

# Create .env file (example)
echo "PRIVATE_KEY=your_private_key" >> .env
echo "MONITORED_ADDRESS=your_celo_address" >> .env

# Deploy smart contract to Celo
npm run deploy

# Start the bot to monitor outgoing transactions
npm start


