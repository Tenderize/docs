TenderFarm is responsible for incetivizing liquidity providers, by accepting LP Tokens
and a proportionaly rewarding them with TenderTokens over time.


## Functions:
- [`initialize`](#itenderfarminitializecontractierc20contractitendertokencontractitenderizer)
- [`farm`](#itenderfarmfarmuint256)
- [`farmWithPermit`](#itenderfarmfarmwithpermituint256uint256uint8bytes32bytes32)
- [`farmFor`](#itenderfarmfarmforaddressuint256)
- [`unfarm`](#itenderfarmunfarmuint256)
- [`harvest`](#itenderfarmharvest)
- [`addRewards`](#itenderfarmaddrewardsuint256)
- [`availableRewards`](#itenderfarmavailablerewardsaddress)
- [`stakeOf`](#itenderfarmstakeofaddress)
- [`totalStake`](#itenderfarmtotalstake)
- [`nextTotalStake`](#itenderfarmnexttotalstake)
- [`setTenderizer`](#itenderfarmsettenderizercontractitenderizer)

## Events:
- [`Farm`](#itenderfarmfarmaddressuint256)
- [`Unfarm`](#itenderfarmunfarmaddressuint256)
- [`Harvest`](#itenderfarmharvestaddressuint256)
- [`RewardsAdded`](#itenderfarmrewardsaddeduint256)


## Functions

### `initialize` {#itenderfarminitializecontractierc20contractitendertokencontractitenderizer }

```solidity
  function initialize() external returns (bool)
```

No description



### `farm` {#itenderfarmfarmuint256 }

```solidity
  function farm(
    uint256 _amount
  ) external
```

stake liquidity pool tokens to receive rewards

Note: '_amount' needs to be approved for the 'TenderFarm' to transfer. harvests current rewards before accounting updates are made. 
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_amount` | `uint256` | amount of liquidity pool tokens to stake|


### `farmWithPermit` {#itenderfarmfarmwithpermituint256uint256uint8bytes32bytes32 }

```solidity
  function farmWithPermit(
    uint256 _amount,
    uint256 _deadline,
    uint8 _v,
    bytes32 _r,
    bytes32 _s
  ) external
```

allow spending token and stake liquidity pool tokens to receive rewards

Note: '_amount' needs to be approved for the 'TenderFarm' to transfer. harvests current rewards before accounting updates are made. calls permit on LP Token. 
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_amount` | `uint256` | amount of liquidity pool tokens to stake |
|`_deadline` | `uint256` | deadline of the permit |
|`_v` | `uint8` | v of signed Permit message |
|`_r` | `bytes32` | r of signed Permit message |
|`_s` | `bytes32` | s of signed Permit message|


### `farmFor` {#itenderfarmfarmforaddressuint256 }

```solidity
  function farmFor(
    address _for,
    uint256 _amount
  ) external
```

stake liquidity pool tokens for a specific account so that it receives rewards

Note: '_amount' needs to be approved for the 'TenderFarm' to transfer. staked tokens will belong to the account they are staked for. harvests current rewards before accounting updates are made. 
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_for` | `address` | account to stake for |
|`_amount` | `uint256` | amount of liquidity pool tokens to stake|


### `unfarm` {#itenderfarmunfarmuint256 }

```solidity
  function unfarm(
    uint256 amount
  ) external
```

unstake liquidity pool tokens

Note: '_amount' needs to be approved for the 'TenderFarm' to transfer. harvests current rewards before accounting updates are made. 
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | `uint256` | amount of liquidity pool tokens to stake|


### `harvest` {#itenderfarmharvest }

```solidity
  function harvest() external
```

harvest outstanding rewards

Note: reverts when trying to harvest multiple times if no new rewards have been added. emits an event with how many reward tokens have been harvested.


### `addRewards` {#itenderfarmaddrewardsuint256 }

```solidity
  function addRewards(
    uint256 amount
  ) external
```

add new rewards

Note: will 'start' a new 'epoch'. only callable by owner. 
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | `uint256` | amount of reward tokens to add|


### `availableRewards` {#itenderfarmavailablerewardsaddress }

```solidity
  function availableRewards(
    address _for
  ) external returns (uint256 amount)
```

Check available rewards for an address.


#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_for` | `address` | address |

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount`| `address` | rewards for address|

### `stakeOf` {#itenderfarmstakeofaddress }

```solidity
  function stakeOf(
    address _of
  ) external returns (uint256 amount)
```

Check stake for an address.


#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_of` | `address` | address |

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount`| `address` | LP tokens deposited for address|

### `totalStake` {#itenderfarmtotalstake }

```solidity
  function totalStake() external returns (uint256 _totalStake)
```

No description


#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`_totalStake`| `` | -  total amount of LP tokens staked|

### `nextTotalStake` {#itenderfarmnexttotalstake }

```solidity
  function nextTotalStake() external returns (uint256 _nextTotalStake)
```

No description


#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`_nextTotalStake`| `` | - LP Tokens staked for next round|

### `setTenderizer` {#itenderfarmsettenderizercontractitenderizer }

```solidity
  function setTenderizer(
    contract ITenderizer _tenderizer
  ) external
```

Changes the tenderizer of the contract


#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_tenderizer` | `contract ITenderizer` | address of the new tenderizer|



## Events

### `Farm` {#itenderfarmfarmaddressuint256 }

```solidity
  event Farm(
  )
```


No description

### `Unfarm` {#itenderfarmunfarmaddressuint256 }

```solidity
  event Unfarm(
  )
```


No description

### `Harvest` {#itenderfarmharvestaddressuint256 }

```solidity
  event Harvest(
  )
```


No description

### `RewardsAdded` {#itenderfarmrewardsaddeduint256 }

```solidity
  event RewardsAdded(
  )
```


No description

