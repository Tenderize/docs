# Introduction

Tenderize focuses on offering liquid staking solutions for Web3 “work protocols”. Work protocols are decentralized networks that require node operators to compete to perform computational work (e.g. storage, rendering, ..) through their stake. In return for doing so, they earn network fees and rewards.

This document serves as a basis for how Tenderize approaches protocol risk. It will focus on how assets are allocated by the protocol, what the risk factors for delegating are and how those are managed and also cover the operational security measures we take to ensure protocol integrity.

## Selecting Node Operators

Selecting high-quality node operators is key for the profitability and risk reduction of the Tenderize protocol. Several factors are considered when selecting which node operators to include in the Tenderize Protocol; these factors include network dominance, track record, performance, commission rates, and uptime.

Tenderize is actively managed, node operators are picked based on the aforementioned set of criteria and periodically evaluated. Assets can be reallocated to different node operators in case there would be a drop off in performance, reliability or profitability. Decision making currently happens by the core team with the plan to move it to community governance iteratively.

### **Key aspects to consider**

We believe it is important to be transparent about our selection process so that you can verify and understand how Tenderize selects node operators to stake your digital assets with. Here are the key aspects to consider when selecting a node operator.

1. **Commission Rate:** The rate a node operator charges their Delegators. Delegators claim rewards and are charged a small, percentage-based fee. This helps node operators pay for operational costs, maintenance costs, and more. We analyze the average rates in the market to evaluate the commision rate being applied.
2. **Track Record**: Of the nodes that qualify based on commission rates, we evaluate its past performance, how long it’s been active, how often it changes its commission rates, whether or not it has been slashed, and how much network fees it has earned.
3. **Network Dominance:** We believe it is important to make choices which support decentralization. That is why we choose node operators that have low market share in the network relative to the work they produce. This has two benefits: decentralization and a larger reward share for our delegators.
4. **Community Involvement:** To measure this, we ask ourselves the following questions:
    1. Is the node operator an active community member?
    2. Does it provide value-added services for the community?
    3. Does it participate in governance proposals, community discussions, and/ or meetups?
    

Leveraging each of these four components informs our overall view and permits us to choose node operators with strong reputations that maintain highly performative infrastructure and offer competitive returns to Tenderize stakers.

### Important Metrics

To track these criteria and give statistical insight into performance we have a come up with a concise set of KPI that prioritises profitability and reliability.

- APY% : Gives insight into the compounding profitability
- 30/90 day fee revenue: Insight into active network participation and important for profitability
- earned fees to total stake ratio: Checks if the node operators is over-performing or underperforming versus its stake, which is a very useful metric since work allocation is often stake-weighted
- % fees shared to delegators : Fee commission rate
- % inflation rewards shared to delegators: Staking rewards commission rate
- slashing frequency (if applicable): We want node operators that get slashes as frequently as possible, preferably not at all.
- Commission rates change frequency: Ideally node operators don’t change commission rates frequently and if they do preferably not upwards which is important for stability. Frequent changes could indicate bad behaviour in trying to skim commissions and changing them back in the hope delegators don’t notice.

## Operational Security

### Multisig

All of our contracts are owned by a Gnosis Safe multisig contract with currently 3 keys that must sign and looking to expand it to more signers external to the Tenderize core team in the future. 

The gnosis safes can be found at following addresses:

- Mainnet: 0x5542b58080FEE48dBE6f38ec0135cE9011519d96
- Arbitrum: 0xfc95B135A970AE3FfbeEbf45833A9e7Eb0956860

### Audits

Tenderize has underwent a full internal and external audit and a public testnet phase. The external security audit was performed by Hacken with a score of 9.8 out of 10. 

You can read and download the full audit report here: [https://hacken.io/audits/#tenderize](https://hacken.io/audits/#tenderize)

### Continuous Integration

Good software development practices lead to better software. Each change to the Tenderize protocol goes through a rigorous automated testing pipeline that runs a combination of unit tests, integration tests and mainnet simulations.

## FAQ

**Has Tenderize protocol been through a security audit?**

- Yes, we have done an audit with Hacken and scored a 9.8. You can download the audit report here: [https://hacken.io/audits/#tenderize](https://hacken.io/audits/#tenderize). Every small update goes through an advanced Continuous Integration pipeline and any major update only goes live after a security audit.

**What are the risks of being slashed if I stake GRT tokens with Tenderize?**

- Tenderize acts as a delegator. Delegators on The Graph protocol are not subject to slashing penalties if the indexer they are assigned to is slashed. However since slashing impacts delegators revenue, delegating to a more profitable indexer would be subject to a 0.50% delegation tax to incentivize the delegator to make better decisions in the future.

**What are the risks of being slashed if I stake LPT tokens with Tenderize?**

- The Livepeer protocol currently does not have any slashing.

**What are the risks of being slashed if I stake MATIC tokens with Tenderize?**

- On Polygon, there is the risk of slashing for all delegators and node operators as a design choice. Since network security is in function of a ⅔ +1 honest majority, delegators carry responsibility for their delegations. However as of today, no slashing events have occured in the Polygon network.

**What are the risks of being slashed if I stake AUDIO tokens with Tenderize?**

- There is a possibility of being slashed but as of to date there have been no such events in the Audius network. Slashing can occur by committee and penalties are decided on a case-by-case basis.

**If Tenderize Liquidity Pools have insufficient liquidity to exchange tASSET for ASSET, w what alternatives exist for me to redeem my tASSET for the staked asset on a 1:1 exchange rate?**

The TenderSwap liquidity pools created by Tenderize offer users instant liquidity for those that don’t want to wait the requisite unbonding period. During times of increased volatility, the liquidity pools may not have sufficient supply to support the demand. Users can always unbond their tokens and wait to receive their assets once the unbonding period has elapsed. Delegated stake is always safe and users will always be able to withdraw their tASSETS in exchange for the underlying asset.