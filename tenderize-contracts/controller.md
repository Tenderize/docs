Entry point for all contract interactions and dependency manager; making required internal transactions
to underlying contracts like the Tenderizer operations (user deposits, staking, unstaking etc),
minting/burning TenderTokens etc.

Set as owner of TenderFarm, TenderToken, Tenderizer.

## Functions:
- [`initialize`](#controllerinitializecontractierc20contractitenderizercontractitendertokenstructcontrollertenderswapconfig)
- [`deposit`](#controllerdeposituint256)
- [`unlock`](#controllerunlockuint256)
- [`withdraw`](#controllerwithdrawuint256)
- [`rebase`](#controllerrebase)
- [`gulp`](#controllergulp)
- [`collectFees`](#controllercollectfees)
- [`collectLiquidityFees`](#controllercollectliquidityfees)
- [`migrateToNewTenderizer`](#controllermigratetonewtenderizercontractitenderizer)
- [`setTenderFarm`](#controllersettenderfarmcontractitenderfarm)
- [`setGov`](#controllersetgovaddress)
- [`execute`](#controllerexecuteaddressuint256bytes)
- [`batchExecute`](#controllerbatchexecuteaddressuint256bytes)



## Functions

### `initialize` {#controllerinitializecontractierc20contractitenderizercontractitendertokenstructcontrollertenderswapconfig }

```solidity
  function initialize() public
```

No description



### `deposit` {#controllerdeposituint256 }

```solidity
  function deposit(
    uint256 _amount
  ) public
```

Deposit tokens in Tenderizer to earn staking rewards.

Note: calls Tenderizer to deposit tokens and updates total pooled tokens. equal amount of tenderTokens are minted for the caller. requires '_amount' to be approved by '_from'.
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_amount` | `uint256` | amount deposited |


### `unlock` {#controllerunlockuint256 }

```solidity
  function unlock(
    uint256 _amount
  ) public returns (uint256 unstakeLockID)
```

Unlock staked tokens.

Note: calls Tenderizer to unstake tokens and updates total pooled tokens. equal amount of tenderTokens are burned from the user. unstaking functionality varies by the protocol, check tenderizer.unstake().
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_amount` | `uint256` | amount deposited |


### `withdraw` {#controllerwithdrawuint256 }

```solidity
  function withdraw(
    uint256 _unstakeLockID
  ) public
```

Withdraws unstaked tokens.

Note: tokens need to be unstaked before they can be withdrawn. caller address should match the user address in lock.
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_unstakeLockID` | `uint256` | lockID of the unstake |


### `rebase` {#controllerrebase }

```solidity
  function rebase() public
```

Rebase will stake pending deposits, claim rewards, 
resync the liquidity pool and collect fees.

Note: only callable by owner(gov).


### `gulp` {#controllergulp }

```solidity
  function gulp() public
```

Gulp stakes any unstaked token balance held by the Tenderizer.

Note: deposit() only aggregates stake in the tenderizer, while gulp will perform the actual stake call. only callable by owner(gov).


### `collectFees` {#controllercollectfees }

```solidity
  function collectFees() public
```

Collect pending protocol fees from Tenderizer.

Note: mints equal number of tender tokens to the owner. only callable by owner(gov).


### `collectLiquidityFees` {#controllercollectliquidityfees }

```solidity
  function collectLiquidityFees() public
```

Collect pending liquidity provider fees from Tenderizer.

Note: mints equal number of tender tokens to the tenderFarm. only callable by owner(gov).


### `migrateToNewTenderizer` {#controllermigratetonewtenderizercontractitenderizer }

```solidity
  function migrateToNewTenderizer() public
```

No description



### `setTenderFarm` {#controllersettenderfarmcontractitenderfarm }

```solidity
  function setTenderFarm(
    contract ITenderFarm _tenderFarm
  ) public
```

Set TenderFarm contract.

Note: only callable by owner(gov).
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_tenderFarm` | `contract ITenderFarm` | TenderFarm contract address |


### `setGov` {#controllersetgovaddress }

```solidity
  function setGov(
    address _gov
  ) public
```

Set new Governance address.

Note: only callable by owner(gov).
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_gov` | `address` | Governance address |


### `execute` {#controllerexecuteaddressuint256bytes }

```solidity
  function execute(
    address _target,
    uint256 _value,
    bytes _data
  ) public
```

Exectutes a transaction on behalf of the controller.

Note: only callable by owner(gov).
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_target` | `address` | target address for the contract call |
|`_value` | `uint256` | ether value to be transeffered with the transaction |
|`_data` | `bytes` | call data - check ethers.interface.encodeFunctionData() |


### `batchExecute` {#controllerbatchexecuteaddressuint256bytes }

```solidity
  function batchExecute(
    address[] _targets,
    uint256[] _values,
    bytes[] _datas
  ) public
```

Exectutes a batch of transaction on behalf of the controller.

Note: Every target to its value, data via it's corresponding index. only callable by owner(gov).
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_targets` | `address[]` | array of target addresses for the contract call |
|`_values` | `uint256[]` | array of ether values to be transeffered with the transactions |
|`_datas` | `bytes[]` | array of call datas - check ethers.interface.encodeFunctionData() |



## Events

