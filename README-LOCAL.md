# Blockchain Voting Application - Local Development Setup

This guide explains how to run the Blockchain Voting application using a local Ganache blockchain for development.

## Prerequisites

1. Node.js (version 14 or higher)
2. Ganache - Local Ethereum blockchain for development
   - Download from: https://trufflesuite.com/ganache/
   - Or install CLI: `npm install -g ganache-cli`
3. MongoDB installed and running locally
4. MetaMask browser extension (optional but recommended)

## Setup Instructions

### 1. Start Ganache

1. Start Ganache with the UI or run `ganache-cli -p 7545`
2. Make sure Ganache is running on port 7545

### 2. Deploy Smart Contracts

Run the following command to deploy the contracts to your local Ganache instance:

```
npm run setup-blockchain
```

This will:
1. Deploy the election factory contract to Ganache
2. Update the contract address in the application

### 3. Set up MongoDB

Make sure MongoDB is running locally at localhost:27017.

### 4. Start the Application

```
npm start
```

The application will be available at: http://localhost:3002

## Using MetaMask with Ganache (Optional)

1. Install MetaMask browser extension
2. Add a new network to MetaMask with these settings:
   - Network Name: Ganache Local
   - RPC URL: http://127.0.0.1:7545
   - Chain ID: 1337
   - Currency Symbol: ETH
3. Import a private key from one of your Ganache accounts into MetaMask

## Troubleshooting

- **Contract deployment fails**: Make sure Ganache is running on port 7545
- **MongoDB connection errors**: Ensure MongoDB is running at localhost:27017
- **Election creation fails**: Check browser console for detailed error messages

## Development Notes

- All blockchain interactions use the local Ganache instance
- Contract addresses are automatically updated when running `npm run setup-blockchain`
- Check the console for detailed logs during election creation 