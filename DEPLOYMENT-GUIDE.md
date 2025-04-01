# Manual Deployment Guide for BlockchainVoting

This guide will help you deploy the ElectionFactory contract to the Sepolia testnet.

## Prerequisites
- MetaMask with Sepolia ETH (at least 0.02 ETH)
- Node.js 11.14.0 installed via NVM

## Step 1: Prepare Your Environment
1. Open a new Command Prompt window (not PowerShell)
2. Change to your project directory:
   ```
   cd C:\Users\Moiz\OneDrive\Desktop\BlockChainVoting-master\BlockChainVoting-master
   ```
3. Switch to Node.js 11.14.0:
   ```
   nvm use 11.14.0
   ```
4. Verify you're using the correct version:
   ```
   node -v
   ```
   This should output `v11.14.0`. If it doesn't, make sure NVM is properly installed.

## Step 2: Deploy Using Remix IDE
Since we're having issues with the script deployment, let's use Remix IDE to deploy the contract:

1. Go to [Remix IDE](https://remix.ethereum.org)
2. Click "File Explorer" tab (left sidebar)
3. Create a new file named "Election.sol"
4. Copy the content from `Ethereum/Contract/Election.sol` into this file
5. Click the "Solidity Compiler" tab (2nd icon on left)
6. Set compiler version to 0.4.25
7. Click "Compile Election.sol"
8. Click "Deploy & Run Transactions" tab (3rd icon on left)
9. Set "ENVIRONMENT" to "Injected Provider - MetaMask"
10. Make sure MetaMask is connected and set to Sepolia network
11. In the "CONTRACT" dropdown, select "ElectionFact" (not Election)
12. Click "Deploy"
13. Confirm the transaction in MetaMask and wait for it to be confirmed
14. Look in the "Deployed Contracts" section to find your contract
15. Copy the contract address (it appears next to the contract name)

## Step 3: Update Your Application
1. Open `Ethereum/election_factory.js` in a text editor
2. Replace the dummy address with your deployed contract address:
   ```javascript
   const contractAddress = 'YOUR_CONTRACT_ADDRESS';
   ```
3. Save the file

## Step 4: Start Your Application
Now you can start your application with the new contract address:
```
npm start
```

## Troubleshooting
- If deployment fails in Remix, try increasing the gas limit
- If MetaMask shows pending for too long, you can speed up or cancel the transaction
- If you see "Error: no contract code at given address", make sure you deploy "ElectionFact" not "Election" 