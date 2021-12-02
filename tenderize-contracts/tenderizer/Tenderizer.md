Tenderizer is responsible for all Protocol interactions (staking, unstaking, claiming rewards)
while also keeping track of user depsotis/withdrawals and protocol fees.

New implementations are required to inherit this contract and override any required internal functions.

## Functions:
- [`deposit`](#itenderizerdepositaddressuint256)
- [`stake`](#itenderizerstakeaddressuint256)
- [`unstake`](#itenderizerunstakeaddressuint256)
- [`withdraw`](#itenderizerwithdrawaddressuint256)
- [`claimRewards`](#itenderizerclaimrewards)
- [`collectFees`](#itenderizercollectfees)
- [`collectLiquidityFees`](#itenderizercollectliquidityfees)
- [`totalStakedTokens`](#itenderizertotalstakedtokens)
- [`calcDepositOut`](#itenderizercalcdepositoutuint256)
- [`pendingFees`](#itenderizerpendingfees)
- [`pendingLiquidityFees`](#itenderizerpendingliquidityfees)
- [`setController`](#itenderizersetcontrolleraddress)
- [`setNode`](#itenderizersetnodeaddress)
- [`setSteak`](#itenderizersetsteakcontractierc20)
- [`setProtocolFee`](#itenderizersetprotocolfeeuint256)
- [`setLiquidityFee`](#itenderizersetliquidityfeeuint256)
- [`setStakingContract`](#itenderizersetstakingcontractaddress)

## Events:
- [`Deposit`](#itenderizerdepositaddressuint256)
- [`Stake`](#itenderizerstakeaddressuint256)
- [`Unstake`](#itenderizerunstakeaddressaddressuint256uint256)
- [`Withdraw`](#itenderizerwithdrawaddressuint256uint256)
- [`RewardsClaimed`](#itenderizerrewardsclaimeduint256uint256uint256)
- [`ProtocolFeeCollected`](#itenderizerprotocolfeecollecteduint256)
- [`LiquidityFeeCollected`](#itenderizerliquidityfeecollecteduint256)
- [`GovernanceUpdate`](#itenderizergovernanceupdatestring)


## Functions

### `deposit` {#itenderizerdepositaddressuint256 }

```solidity
  function deposit(
    address _from,
    uint256 _amount
  ) external
```

Deposit tokens in Tenderizer.

Note: only callable by Controller. doesn't actually stakes the tokens but aggregates the balance in the tenderizer awaiting to be staked. requires '_amount' to be approved by '_from'.
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_from` | `address` | account that deposits |
|`_amount` | `uint256` | amount deposited |


### `stake` {#itenderizerstakeaddressuint256 }

```solidity
  function stake(
    address _node,
    uint256 _amount
  ) external
```

Stake '_amount' of tokens to '_node'.

Note: If '_node' is not specified, stake towards the default address. If '_amount' is 0, stake the entire current token balance of the Tenderizer. Only callable by controller.
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_node` | `address` | account to stake to in the underlying protocol |
|`_amount` | `uint256` | amount to stake |


### `unstake` {#itenderizerunstakeaddressuint256 }

```solidity
  function unstake(
    address _account,
    uint256 _amount
  ) external returns (uint256 unstakeLockID)
```

Unstake '_amount' of tokens from '_account'.

Note: If '_account' is not specified, stake towards the default address. If '_amount' is 0, unstake the entire amount staked towards _account. Only callable by controller.
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_account` | `address` | account to unstake from in the underlying protocol |
|`_amount` | `uint256` | amount to unstake |


### `withdraw` {#itenderizerwithdrawaddressuint256 }

```solidity
  function withdraw(
    address _unstakeLockID,
    uint256 _account
  ) external
```

Withdraw '_amount' of tokens previously unstaked by '_account'.

Note: If '_amount' isn't specified all unstake tokens by '_account' will be withdrawn. Requires '_account' to have unstaked prior to calling withdraw. Only callable by controller.
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_unstakeLockID` | `address` | ID for the lock to request the withdraw for |
|`_account` | `uint256` | account requesting the withdrawam |


### `claimRewards` {#itenderizerclaimrewards }

```solidity
  function claimRewards() external
```

Claim staking rewards for the underlying protocol.

Note: Only callable by controller.


### `collectFees` {#itenderizercollectfees }

```solidity
  function collectFees() external returns (uint256)
```

Collect fees pulls any pending governance fees from the Tenderizer to the governance treasury.

Note: Resets pendingFees. Fees claimed are added to total staked.

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`Amount`| `` | of protocol fees collected |

### `collectLiquidityFees` {#itenderizercollectliquidityfees }

```solidity
  function collectLiquidityFees() external returns (uint256)
```

Collect Liquidity fees pulls any pending LP fees from the Tenderizer to TenderFarm.

Note: Resets pendingFees. Fees claimed are added to total staked.

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`Amount`| `` | of liquidity fees collected |

### `totalStakedTokens` {#itenderizertotalstakedtokens }

```solidity
  function totalStakedTokens() external returns (uint256)
```

Total Staked Tokens returns the total amount of underlying tokens staked by this Tenderizer.



#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`total`| `` | amount staked by this Tenderizer|

### `calcDepositOut` {#itenderizercalcdepositoutuint256 }

```solidity
  function calcDepositOut() external returns (uint256)
```

Returns the number of tenderTokens to be minted for amountIn deposit.

Note: used by controller to calculate tokens to be minted before depositing.


### `pendingFees` {#itenderizerpendingfees }

```solidity
  function pendingFees() external returns (uint256)
```

No description



### `pendingLiquidityFees` {#itenderizerpendingliquidityfees }

```solidity
  function pendingLiquidityFees() external returns (uint256)
```

No description



### `setController` {#itenderizersetcontrolleraddress }

```solidity
  function setController() external
```

No description



### `setNode` {#itenderizersetnodeaddress }

```solidity
  function setNode() external
```

No description



### `setSteak` {#itenderizersetsteakcontractierc20 }

```solidity
  function setSteak() external
```

No description



### `setProtocolFee` {#itenderizersetprotocolfeeuint256 }

```solidity
  function setProtocolFee() external
```

No description



### `setLiquidityFee` {#itenderizersetliquidityfeeuint256 }

```solidity
  function setLiquidityFee() external
```

No description



### `setStakingContract` {#itenderizersetstakingcontractaddress }

```solidity
  function setStakingContract() external
```

No description




## Events

### `Deposit` {#itenderizerdepositaddressuint256 }

```solidity
  event Deposit(
  )
```


No description

### `Stake` {#itenderizerstakeaddressuint256 }

```solidity
  event Stake(
  )
```


No description

### `Unstake` {#itenderizerunstakeaddressaddressuint256uint256 }

```solidity
  event Unstake(
  )
```


No description

### `Withdraw` {#itenderizerwithdrawaddressuint256uint256 }

```solidity
  event Withdraw(
  )
```


No description

### `RewardsClaimed` {#itenderizerrewardsclaimeduint256uint256uint256 }

```solidity
  event RewardsClaimed(
  )
```


No description

### `ProtocolFeeCollected` {#itenderizerprotocolfeecollecteduint256 }

```solidity
  event ProtocolFeeCollected(
  )
```


No description

### `LiquidityFeeCollected` {#itenderizerliquidityfeecollecteduint256 }

```solidity
  event LiquidityFeeCollected(
  )
```


No description

### `GovernanceUpdate` {#itenderizergovernanceupdatestring }

```solidity
  event GovernanceUpdate(
  )
```


No description

