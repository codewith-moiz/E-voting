# Deploy Election Factory Contract with Remix IDE

Since we're facing compatibility issues with Node.js 11.14.0 and the latest Web3 dependencies, we'll use Remix IDE to deploy the contract.

## Step 1: Copy Your Contract Code

1. Copy the full content of your contract from `ethereum/Contract/Election.sol`

## Step 2: Open Remix IDE

1. Open [Remix IDE](https://remix.ethereum.org) in your browser
2. Click on the "File explorer" tab on the left sidebar
3. Create a new file called `Election.sol`
4. Paste your contract code into this file

## Step 3: Compile the Contract

1. Click on the "Solidity compiler" tab on the left sidebar (second icon)
2. Make sure the compiler version is set to `0.4.25` (matching your contract's pragma directive)
3. Click "Compile Election.sol"
4. Wait for compilation to complete successfully

## Step 4: Deploy to Sepolia

1. Click on the "Deploy & run transactions" tab on the left sidebar (third icon)
2. In the "ENVIRONMENT" dropdown, select "Injected Provider - MetaMask"
3. MetaMask will prompt you to connect - make sure your MetaMask is set to the Sepolia network
4. In the "CONTRACT" dropdown, select "ElectionFact" (this is your factory contract)
5. Click the "Deploy" button
6. MetaMask will prompt you to confirm the transaction - review gas fees and click "Confirm"
7. Wait for transaction to be mined

## Step 5: Verify Deployment

1. Once deployed, the contract will appear under "Deployed Contracts" at the bottom
2. Copy the contract address (click the copy icon)
3. You can view your contract on Sepolia Etherscan at:
   `https://sepolia.etherscan.io/address/YOUR_CONTRACT_ADDRESS`

## Step 6: Update Your Application

1. Open `ethereum/election_factory.js` in your project
2. Replace the existing contract address with your new contract address:

```javascript
const contractAddress = 'YOUR_NEW_CONTRACT_ADDRESS';
```

3. Save the file

## Step 7: Test Your Application

1. Run your application with `npm start`
2. Verify that it connects to your new contract correctly

## Troubleshooting

- If MetaMask doesn't show up, make sure it's installed and unlocked
- If the transaction fails, check that you have enough Sepolia ETH
- Make sure the compiler version matches your contract's pragma directive
- If the contract doesn't appear in the dropdown, check for compilation errors

## Get Sepolia ETH

If you need Sepolia ETH for deployment:
1. Visit a Sepolia faucet like [sepoliafaucet.com](https://sepoliafaucet.com)
2. Enter your wallet address
3. Receive free test ETH for development 