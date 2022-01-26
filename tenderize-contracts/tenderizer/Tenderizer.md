Tenderizer is responsible for all Protocol interactions (staking, unstaking, claiming rewards)
while also keeping track of user depsotis/withdrawals and protocol fees.

New implementations are required to inherit this contract and override any required internal functions.

## Functions:
- [`deposit`](#itenderizerdeposituint256)
- [`depositWithPermit`](#itenderizerdepositwithpermituint256uint256uint8bytes32bytes32)
- [`stake`](#itenderizerstakeaddressuint256)
- [`unstake`](#itenderizerunstakeuint256)
- [`withdraw`](#itenderizerwithdrawuint256)
- [`claimRewards`](#itenderizerclaimrewards)
- [`collectFees`](#itenderizercollectfees)
- [`collectLiquidityFees`](#itenderizercollectliquidityfees)
- [`totalStakedTokens`](#itenderizertotalstakedtokens)
- [`calcDepositOut`](#itenderizercalcdepositoutuint256)
- [`pendingFees`](#itenderizerpendingfees)
- [`pendingLiquidityFees`](#itenderizerpendingliquidityfees)
- [`execute`](#itenderizerexecuteaddressuint256bytes)
- [`batchExecute`](#itenderizerbatchexecuteaddressuint256bytes)
- [`setGov`](#itenderizersetgovaddress)
- [`setNode`](#itenderizersetnodeaddress)
- [`setSteak`](#itenderizersetsteakcontractierc20)
- [`setProtocolFee`](#itenderizersetprotocolfeeuint256)
- [`setLiquidityFee`](#itenderizersetliquidityfeeuint256)
- [`setStakingContract`](#itenderizersetstakingcontractaddress)
- [`setTenderFarm`](#itenderizersettenderfarmcontractitenderfarm)

## Events:
- [`Deposit`](#itenderizerdepositaddressuint256)
- [`Stake`](#itenderizerstakeaddressuint256)
- [`Unstake`](#itenderizerunstakeaddressaddressuint256uint256)
- [`Withdraw`](#itenderizerwithdrawaddressuint256uint256)
- [`RewardsClaimed`](#itenderizerrewardsclaimedint256uint256uint256)
- [`ProtocolFeeCollected`](#itenderizerprotocolfeecollecteduint256)
- [`LiquidityFeeCollected`](#itenderizerliquidityfeecollecteduint256)
- [`GovernanceUpdate`](#itenderizergovernanceupdatestring)


## Functions

### `deposit` {#itenderizerdeposituint256 }

```solidity
  function deposit(
    uint256 _amount
  ) external
```

Deposit tokens in Tenderizer.

Note: doesn't actually stakes the tokens but aggregates the balance in the tenderizer awaiting to be staked. requires '_amount' to be approved by '_from'.
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_amount` | `uint256` | amount deposited |


### `depositWithPermit` {#itenderizerdepositwithpermituint256uint256uint8bytes32bytes32 }

```solidity
  function depositWithPermit(
    uint256 _amount,
    uint256 _deadline,
    uint8 _v,
    bytes32 _r,
    bytes32 _s
  ) external
```

Deposit tokens in Tenderizer with permit.

Note: doesn't actually stakes the tokens but aggregates the balance in the tenderizer awaiting to be staked. requires '_amount' to be approved by '_from'.
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_amount` | `uint256` | amount deposited |
|`_deadline` | `uint256` | deadline for the permit |
|`_v` | `uint8` | from ECDSA signature |
|`_r` | `bytes32` | from ECDSA signature |
|`_s` | `bytes32` | from ECDSA signature |


### `stake` {#itenderizerstakeaddressuint256 }

```solidity
  function stake(
    address _node,
    uint256 _amount
  ) external
```

Stake '_amount' of tokens to '_node'.

Note: If '_node' is not specified, stake towards the default address. If '_amount' is 0, stake the entire current token balance of the Tenderizer. Only callable by Gov.
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_node` | `address` | account to stake to in the underlying protocol |
|`_amount` | `uint256` | amount to stake |


### `unstake` {#itenderizerunstakeuint256 }

```solidity
  function unstake(
    uint256 _amount
  ) external returns (uint256 unstakeLockID)
```

Unstake '_amount' of tokens from '_account'.

Note: unstake from the default address. If '_amount' is 0, unstake the entire amount staked towards _account.
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_amount` | `uint256` | amount to unstake |

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`unstakeLockID`| `uint256` | unstake lockID generated for unstake |

### `withdraw` {#itenderizerwithdrawuint256 }

```solidity
  function withdraw(
    uint256 _unstakeLockID
  ) external
```

Withdraw '_amount' of tokens previously unstaked by '_account'.

Note: If '_amount' isn't specified all unstake tokens by '_account' will be withdrawn. Requires '_account' to have unstaked prior to calling withdraw.
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_unstakeLockID` | `uint256` | ID for the lock to request the withdraw for |


### `claimRewards` {#itenderizerclaimrewards }

```solidity
  function claimRewards() external
```

Compound all the rewards and new deposits.
Claim staking rewards and earned fees for the underlying protocol and stake
any leftover token balance. Process Tender protocol fees if revenue is positive.



### `collectFees` {#itenderizercollectfees }

```solidity
  function collectFees() external returns (uint256 feesCollected)
```

Collect fees pulls any pending governance fees from the Tenderizer to the governance treasury.

Note: Resets pendingFees. Fees claimed are added to total staked.

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`feesCollected`| `` | Amount of protocol fees collected |

### `collectLiquidityFees` {#itenderizercollectliquidityfees }

```solidity
  function collectLiquidityFees() external returns (uint256 liquidtyFeesCollected)
```

Collect Liquidity fees pulls any pending LP fees from the Tenderizer to TenderFarm.

Note: Resets pendingFees. Fees claimed are added to total staked.

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`liquidtyFeesCollected`| `` | Amount of liquidity fees collected |

### `totalStakedTokens` {#itenderizertotalstakedtokens }

```solidity
  function totalStakedTokens() external returns (uint256 _totalStakedTokens)
```

Total Staked Tokens returns the total amount of underlying tokens staked by this Tenderizer.



#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`_totalStakedTokens`| `` | total amount staked by this Tenderizer|

### `calcDepositOut` {#itenderizercalcdepositoutuint256 }

```solidity
  function calcDepositOut() external returns (uint256 depositOut)
```

Returns the number of tenderTokens to be minted for amountIn deposit.

Note: used by controller to calculate tokens to be minted before depositing. to be used when there a delegation tax is deducted, for eg. in Graph.

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`depositOut`| `uint256` | number of tokens staked for depositIn. |

### `pendingFees` {#itenderizerpendingfees }

```solidity
  function pendingFees() external returns (uint256 _pendingFees)
```

No description


#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`_pendingFees`| `` | amount of fees pending since last claim|

### `pendingLiquidityFees` {#itenderizerpendingliquidityfees }

```solidity
  function pendingLiquidityFees() external returns (uint256 _pendingLiquidityFees)
```

No description


#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`_pendingLiquidityFees`| `` | amount of liqudity fees pending since last claim|

### `execute` {#itenderizerexecuteaddressuint256bytes }

```solidity
  function execute(
    address _target,
    uint256 _value,
    bytes _data
  ) external
```

Exectutes a transaction on behalf of the controller.

Note: only callable by owner(gov).
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_target` | `address` | target address for the contract call |
|`_value` | `uint256` | ether value to be transeffered with the transaction |
|`_data` | `bytes` | call data - check ethers.interface.encodeFunctionData() |


### `batchExecute` {#itenderizerbatchexecuteaddressuint256bytes }

```solidity
  function batchExecute(
    address[] _targets,
    uint256[] _values,
    bytes[] _datas
  ) external
```

Exectutes a batch of transaction on behalf of the controller.

Note: Every target to its value, data via it's corresponding index. only callable by owner(gov).
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_targets` | `address[]` | array of target addresses for the contract call |
|`_values` | `uint256[]` | array of ether values to be transeffered with the transactions |
|`_datas` | `bytes[]` | array of call datas - check ethers.interface.encodeFunctionData() |


### `setGov` {#itenderizersetgovaddress }

```solidity
  function setGov() external
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



### `setTenderFarm` {#itenderizersettenderfarmcontractitenderfarm }

```solidity
  function setTenderFarm() external
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

### `RewardsClaimed` {#itenderizerrewardsclaimedint256uint256uint256 }

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

