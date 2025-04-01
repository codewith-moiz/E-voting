# Deploying Contracts to Sepolia using Remix IDE

This guide explains how to deploy the ElectionFactory contract to Sepolia testnet using Remix IDE.

## Prerequisites

1. MetaMask browser extension installed and set up with Sepolia testnet
2. Some Sepolia ETH for gas fees (you can get this from a faucet)
3. The contract source code from this project

## Steps to Deploy

### 1. Get the Contract Source Code

You can find the contract in:
```
Ethereum/Contract/Election.sol
```

### 2. Open Remix IDE

Go to [Remix IDE](https://remix.ethereum.org/)

### 3. Create a New File in Remix

1. In the "File Explorer" tab, click the "+" button to create a new file
2. Name it `Election.sol`
3. Copy and paste the contract code from your local file into this new file

### 4. Compile the Contract

1. Go to the "Solidity Compiler" tab (looks like an "S" icon on the left)
2. Select compiler version 0.4.25 (as specified in the contract)
3. Click "Compile Election.sol"

### 5. Deploy to Sepolia

1. Go to the "Deploy & Run Transactions" tab (looks like a "play" icon on the left)
2. In the "Environment" dropdown, select "Injected Provider - MetaMask"
3. MetaMask will prompt you to connect - make sure you're on Sepolia network
4. In the "Contract" dropdown, select "ElectionFact" (not Election)
5. Click "Deploy"
6. MetaMask will open and ask you to confirm the transaction
7. Click "Confirm"
8. Wait for the transaction to be mined (this might take a minute or two)

### 6. Get the Deployed Contract Address

After deployment:
1. Look for your contract under "Deployed Contracts"
2. You'll see the contract address next to the name
3. Copy this address

### 7. Update Your Application

Update the contract address in:
```
Ethereum/election_factory.js
```

Replace the `contractAddress` variable with your newly deployed contract address:

```javascript
const contractAddress = '0xYourNewContractAddressHere';
```

## Testing Your Deployment

After updating your application with the new contract address:

1. Start your application with `npm start`
2. Try to create an election using the form
3. Make sure MetaMask is connected to the Sepolia network
4. You should now be able to create elections without the "Insufficient funds" error

## Troubleshooting

- If you see "Error: no contract code at given address" - make sure you copied the address correctly
- If transactions are failing - check that you have enough Sepolia ETH
- If MetaMask shows "Insufficient funds" - check that you're using the same account that has your Sepolia ETH 