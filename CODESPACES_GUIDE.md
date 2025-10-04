# How to Run CeloTxTrackerBot in GitHub Codespaces

This guide will show you how to safely deploy the smart contract and run the bot entirely in GitHub Codespaces without exposing your private key.

---

## 1. Open Codespaces

1. Go to your repository: [https://github.com/Mystique85/CeloTxTrackerBot](https://github.com/Mystique85/CeloTxTrackerBot)
2. Click **Code → Codespaces → New codespace**
3. Wait until the environment is fully loaded.

---

## 2. Set Repository Secrets

1. In Codespaces, click **⚙️ Settings → Secrets → New repository secret**
2. Add the following secrets:

   * `PRIVATE_KEY` → Your Celo private key
   * `MONITORED_ADDRESS` → Your Celo address

> These secrets are safe and never exposed in the repository.

---

## 3. Install Dependencies

Open the terminal in Codespaces and run:

```bash
npm install
```

---

## 4. Deploy the Smart Contract

Run the deployment script with:

```bash
npm run deploy
```

* The terminal will display the deployed contract address.
* Save this address for your Proof of Ship submission.

---

## 5. Run the Bot

Start the bot to monitor transactions:

```bash
npm start
```

* The bot will listen for pending transactions from the address you set in `MONITORED_ADDRESS`.
* Transaction hashes and recipients will be printed in real-time.

---

## 6. Optional: Discord/Telegram Integration

* You can modify `src/index.js` to send notifications via webhooks whenever a new transaction is detected.
* This allows real-time alerts without checking the terminal.

---

## 7. Safety Notes

* Never commit your `.env` or private keys to GitHub.
* Codespaces secrets are secure and used only within the environment.
* Your repository remains safe for public sharing and Proof of Ship submission.
