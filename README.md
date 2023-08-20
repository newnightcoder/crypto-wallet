# My Wallet

This repo contains the API and the frontend scaffholding of an app that
allows users to make payments in various crypto-currencies.

Your goal is to develop the user interface so that the user can:

1. see the list of assets in his wallet with their current balances
2. emit a payment to a beneficiary of his choice
3. browse the list of transactions that were made for each asset

Below, you'll find setup instructions and guidelines that we would
like you to follow for this exercise.

## Setup

To launch the API:

```
cd api
yarn install
node index.js
```

To start the front development server

```
cd client
yarn install
yarn start
```

Here are the fixed credentials for authentication:

- username: `bob`
- password: `abc123`

The lifespan of an authorization token can be controlled on server side using
the environment variable `TOKEN_LIFETIME` (value in ms; defaults to 1h).

To test payment rejection (see api spec), you can use the following addresses:

- ETH: 0x71C7656EC7ab88b098defB751B7401B5f6d8976F
- BTC: bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
