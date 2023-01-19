# Providing Liquidity

On TenderSwap, you can also put your TenderTokens for further use by providing liquidity to some pools (e.g., tLPT/LPT).

## What is liquidity providing?

In a DeFi ecosystem, investors can deposit tokens in a Liquidity Pool for a particular trading pair and support the protocol in providing sufficient liquidity for buyers and sellers. By providing such liquidity, investors receive a rewards from swap fees.

Once you receive your new TenderTokens from staking, you can use those tokens to provide liquidity to specific pairs (e.g., tGRT/GRT liquidity) and earn more rewards. It’s easy to do.

## Adding Liquidity

First, select your token from the dropdown in the top left corner of the app (e.g., AUDIO, GRT, MATIC, LPT) and make sure your connected wallet is on the right network. 

Then, go to the “Swap” tab on the [Tenderize app](https://tenderize.me) and select “Add Liquidity.”

![add liquidity](https://i.imgur.com/o60Kk4C.png)

You can now choose the amount of the underlying token and the amount of the TenderToken that you wish to deposit in the Liquidity Pool. 

Once you’re ready, click on the “Allow Tenderize to spend token” and confirm the transaction on your wallet (be aware of gas fees). 

Now, you can effectively add liquidity to the pool by clicking “Add Liquidity". In return you will receive an amount of liquidity pool tokens (e.g. tLPT-LPT-SWAP) that represent your deposited liquidity. These tokens can be deposited in the [Farm](./farm.md) to earn rewards.

## Removing Liquidity

You can also withdraw your deposited liquidity by returning the liquidity pool tokens you received while adding. To do so, go to the "Swap" tab on the [Tenderize app](https://tenderize.me) and click "Remove Liquidity".

Here you can choose between "Multi asset" and "Single asset". Multi asset will give you back both the underlying tokens and TenderTokens relative to the balances of the liquidity pool. With Single asset, you can choose either one token to receive back, but note that this will incur a price slippage.

![remove liquidity](https://i.imgur.com/9yrt7WO.png)

Once you've selected your withdrawal type, you can enter an amount and the application will show you the amount of tokens you will receive. Once you're ready, click "Remove Liquidity" and confirm the transaction in your wallet.

## A note on price slippage and impermanent loss

Automated Market Makers (AMMs) face potential price slippage between assets and impermanent loss. When providing/removing liquidity, unbalanced token allocations can lead to price slippages. The optimal approach is to provide liquidity weighted equally on both tokens to ensure a pool’s equilibrium. The max splippage can also be set; incase the slippage exceeds the limit the transaction will revert.

TenderSwap is a stableswap AMM solving some of the capital issues of traditional AMMs, offering higher efficiency and a smaller amount of price slippage when swapping. It provides UX benefits as well by not having to wrap elastic supply tokens for usage in liquidity pools.
