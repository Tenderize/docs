
TenderSwap is a light-weight StableSwap implementation for two assets.
See the Curve StableSwap paper for more details (https://curve.fi/files/stableswap-paper.pdf).
that trade 1:1 with eachother (e.g. USD stablecoins or tenderToken derivatives vs their underlying assets).
It supports Elastic Supply ERC20 tokens, which are tokens of which the balances can change
as the total supply of the token 'rebases'.

## Functions:
- [`initialize`](#itenderswapinitializecontractierc20contractierc20stringstringuint256uint256uint256contractliquiditypooltoken)
- [`lpToken`](#itenderswaplptoken)
- [`getA`](#itenderswapgeta)
- [`getAPrecise`](#itenderswapgetaprecise)
- [`getToken0`](#itenderswapgettoken0)
- [`getToken1`](#itenderswapgettoken1)
- [`getToken0Balance`](#itenderswapgettoken0balance)
- [`getToken1Balance`](#itenderswapgettoken1balance)
- [`getVirtualPrice`](#itenderswapgetvirtualprice)
- [`calculateSwap`](#itenderswapcalculateswapcontractierc20uint256)
- [`calculateRemoveLiquidity`](#itenderswapcalculateremoveliquidityuint256)
- [`calculateRemoveLiquidityOneToken`](#itenderswapcalculateremoveliquidityonetokenuint256contractierc20)
- [`calculateTokenAmount`](#itenderswapcalculatetokenamountuint256bool)
- [`swap`](#itenderswapswapcontractierc20uint256uint256uint256)
- [`addLiquidity`](#itenderswapaddliquidityuint2562uint256uint256)
- [`removeLiquidity`](#itenderswapremoveliquidityuint256uint2562uint256)
- [`removeLiquidityOneToken`](#itenderswapremoveliquidityonetokenuint256contractierc20uint256uint256)
- [`removeLiquidityImbalance`](#itenderswapremoveliquidityimbalanceuint2562uint256uint256)
- [`setAdminFee`](#itenderswapsetadminfeeuint256)
- [`setSwapFee`](#itenderswapsetswapfeeuint256)
- [`rampA`](#itenderswaprampauint256uint256)
- [`stopRampA`](#itenderswapstoprampa)
- [`transferOwnership`](#itenderswaptransferownershipaddress)

## Events:
- [`Swap`](#itenderswapswapaddresscontractierc20uint256uint256)
- [`AddLiquidity`](#itenderswapaddliquidityaddressuint2562uint2562uint256uint256)
- [`RemoveLiquidity`](#itenderswapremoveliquidityaddressuint2562uint256)
- [`RemoveLiquidityOne`](#itenderswapremoveliquidityoneaddressuint256uint256contractierc20uint256)
- [`RemoveLiquidityImbalance`](#itenderswapremoveliquidityimbalanceaddressuint2562uint2562uint256uint256)
- [`NewAdminFee`](#itenderswapnewadminfeeuint256)
- [`NewSwapFee`](#itenderswapnewswapfeeuint256)
- [`RampA`](#itenderswaprampauint256uint256uint256uint256)
- [`StopRampA`](#itenderswapstoprampauint256uint256)


## Functions

### `initialize` {#itenderswapinitializecontractierc20contractierc20stringstringuint256uint256uint256contractliquiditypooltoken }

```solidity
  function initialize(
    contract IERC20 _token0,
    contract IERC20 _token1,
    string lpTokenName,
    string lpTokenSymbol,
    uint256 _a,
    uint256 _fee,
    uint256 _adminFee,
    contract LiquidityPoolToken lpTokenTargetAddress
  ) external returns (bool success)
```

Initializes this Swap contract with the given parameters.
This will also clone a LPToken contract that represents users'
LP positions. The owner of LPToken will be this contract - which means
only this contract is allowed to mint/burn tokens.



#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_token0` | `contract IERC20` | First token in the pool |
|`_token1` | `contract IERC20` | Second token in the pool |
|`lpTokenName` | `string` | the long-form name of the token to be deployed |
|`lpTokenSymbol` | `string` | the short symbol for the token to be deployed |
|`_a` | `uint256` | the amplification coefficient * n * (n - 1). See the StableSwap paper for details |
|`_fee` | `uint256` | default swap fee to be initialized with |
|`_adminFee` | `uint256` | default adminFee to be initialized with |
|`lpTokenTargetAddress` | `contract LiquidityPoolToken` | the address of an existing LiquidityPoolToken contract to use as a target |

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`success`| `contract IERC20` | true is successfully initialized|

### `lpToken` {#itenderswaplptoken }

```solidity
  function lpToken() external returns (contract LiquidityPoolToken lpTokenContract)
```

Returns the liquidity pool token contract.



#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`lpTokenContract`| `` | Liquidity pool token contract.|

### `getA` {#itenderswapgeta }

```solidity
  function getA() external returns (uint256 a)
```

Return A, the amplification coefficient * n * (n - 1)

Note: See the StableSwap paper for details 

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`a`| `` | the amplifaction coefficient|

### `getAPrecise` {#itenderswapgetaprecise }

```solidity
  function getAPrecise() external returns (uint256 aPrecise)
```

Return A in its raw precision form

Note: See the StableSwap paper for details 

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`aPrecise`| `` | A parameter in its raw precision form|

### `getToken0` {#itenderswapgettoken0 }

```solidity
  function getToken0() external returns (contract IERC20 token0)
```

Returns the contract address for token0

Note: EVM return type is IERC20 

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`token0`| `` | contract address|

### `getToken1` {#itenderswapgettoken1 }

```solidity
  function getToken1() external returns (contract IERC20 token1)
```

Returns the contract address for token1

Note: EVM return type is IERC20 

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`token1`| `` | contract address|

### `getToken0Balance` {#itenderswapgettoken0balance }

```solidity
  function getToken0Balance() external returns (uint256 token0Balance)
```

Return current balance of token0 (tender) in the pool



#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`token0Balance`| `` | current balance of the pooled tendertoken|

### `getToken1Balance` {#itenderswapgettoken1balance }

```solidity
  function getToken1Balance() external returns (uint256 token1Balance)
```

Return current balance of token1 (underlying) in the pool



#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`token1Balance`| `` | current balance of the pooled underlying token|

### `getVirtualPrice` {#itenderswapgetvirtualprice }

```solidity
  function getVirtualPrice() external returns (uint256 virtualPrice)
```

Get the override price, to help calculate profit



#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`virtualPrice`| `` | the override price, scaled to the POOL_PRECISION_DECIMALS|

### `calculateSwap` {#itenderswapcalculateswapcontractierc20uint256 }

```solidity
  function calculateSwap(
    contract IERC20 _tokenFrom,
    uint256 _dx
  ) external returns (uint256 tokensToReceive)
```

Calculate amount of tokens you receive on swap


#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_tokenFrom` | `contract IERC20` | the token the user wants to sell |
|`_dx` | `uint256` | the amount of tokens the user wants to sell. If the token charges a fee on transfers, use the amount that gets transferred after the fee. |

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`tokensToReceive`| `contract IERC20` | amount of tokens the user will receive|

### `calculateRemoveLiquidity` {#itenderswapcalculateremoveliquidityuint256 }

```solidity
  function calculateRemoveLiquidity(
    uint256 amount
  ) external returns (uint256[2] tokensToReceive)
```

A simple method to calculate amount of each underlying
tokens that is returned upon burning given amount of LP tokens


#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | `uint256` | the amount of LP tokens that would be burned on withdrawal |

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`tokensToReceive`| `uint256` | array of token balances that the user will receive|

### `calculateRemoveLiquidityOneToken` {#itenderswapcalculateremoveliquidityonetokenuint256contractierc20 }

```solidity
  function calculateRemoveLiquidityOneToken(
    uint256 tokenAmount,
    contract IERC20 tokenReceive
  ) external returns (uint256 tokensToReceive)
```

Calculate the amount of underlying token available to withdraw
when withdrawing via only single token


#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenAmount` | `uint256` | the amount of LP token to burn |
|`tokenReceive` | `contract IERC20` | the token to receive |

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`tokensToReceive`| `uint256` | calculated amount of underlying token to be received. available to withdraw|

### `calculateTokenAmount` {#itenderswapcalculatetokenamountuint256bool }

```solidity
  function calculateTokenAmount(
    uint256[] amounts,
    bool deposit
  ) external returns (uint256 tokensToReceive)
```

A simple method to calculate prices from deposits or
withdrawals, excluding fees but including slippage. This is
helpful as an input into the various "min" parameters on calls
to fight front-running


Note: This shouldn't be used outside frontends for user estimates.  
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amounts` | `uint256[]` | an array of token amounts to deposit or withdrawal, corresponding to pool cardinality of [token0, token1]. The amount should be in each pooled token's native precision. |
|`deposit` | `bool` | whether this is a deposit or a withdrawal |

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`tokensToReceive`| `uint256[]` | token amount the user will receive|

### `swap` {#itenderswapswapcontractierc20uint256uint256uint256 }

```solidity
  function swap(
    contract IERC20 _tokenFrom,
    uint256 _dx,
    uint256 _minDy,
    uint256 _deadline
  ) external returns (uint256 _dy)
```

Swap two tokens using this pool

Note: revert is token being sold is not in the pool. 
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_tokenFrom` | `contract IERC20` | the token the user wants to sell |
|`_dx` | `uint256` | the amount of tokens the user wants to swap from |
|`_minDy` | `uint256` | the min amount the user would like to receive, or revert |
|`_deadline` | `uint256` | latest timestamp to accept this transaction |

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`_dy`| `contract IERC20` | amount of tokens received|

### `addLiquidity` {#itenderswapaddliquidityuint2562uint256uint256 }

```solidity
  function addLiquidity(
    uint256[2] _amounts,
    uint256 _minToMint,
    uint256 _deadline
  ) external returns (uint256 lpMinted)
```

Add liquidity to the pool with the given amounts of tokens


#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_amounts` | `uint256[2]` | the amounts of each token to add, in their native precision          according to the cardinality of the pool [token0, token1] |
|`_minToMint` | `uint256` | the minimum LP tokens adding this amount of liquidity should mint, otherwise revert. Handy for front-running mitigation |
|`_deadline` | `uint256` | latest timestamp to accept this transaction |

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`lpMinted`| `uint256[2]` | amount of LP token user minted and received|

### `removeLiquidity` {#itenderswapremoveliquidityuint256uint2562uint256 }

```solidity
  function removeLiquidity(
    uint256 amount,
    uint256[2] minAmounts,
    uint256 deadline
  ) external returns (uint256[2] tokensReceived)
```

Burn LP tokens to remove liquidity from the pool.

Note: Liquidity can always be removed, even when the pool is paused. 
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | `uint256` | the amount of LP tokens to burn |
|`minAmounts` | `uint256[2]` | the minimum amounts of each token in the pool        acceptable for this burn. Useful as a front-running mitigation        according to the cardinality of the pool [token0, token1] |
|`deadline` | `uint256` | latest timestamp to accept this transaction |

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`tokensReceived`| `uint256` | is the amounts of tokens user received|

### `removeLiquidityOneToken` {#itenderswapremoveliquidityonetokenuint256contractierc20uint256uint256 }

```solidity
  function removeLiquidityOneToken(
    uint256 _tokenAmount,
    contract IERC20 _tokenReceive,
    uint256 _minAmount,
    uint256 _deadline
  ) external returns (uint256 tokensReceived)
```

Remove liquidity from the pool all in one token.


#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_tokenAmount` | `uint256` | the amount of the token you want to receive |
|`_tokenReceive` | `contract IERC20` | the  token you want to receive |
|`_minAmount` | `uint256` | the minimum amount to withdraw, otherwise revert |
|`_deadline` | `uint256` | latest timestamp to accept this transaction |

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`tokensReceived`| `uint256` | amount of chosen token user received|

### `removeLiquidityImbalance` {#itenderswapremoveliquidityimbalanceuint2562uint256uint256 }

```solidity
  function removeLiquidityImbalance(
    uint256[2] _amounts,
    uint256 _maxBurnAmount,
    uint256 _deadline
  ) external returns (uint256 lpBurned)
```

Remove liquidity from the pool, weighted differently than the
pool's current balances. Withdraw fee that decays linearly
over period of 4 weeks since last deposit will apply.


#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_amounts` | `uint256[2]` | how much of each token to withdraw |
|`_maxBurnAmount` | `uint256` | the max LP token provider is willing to pay to remove liquidity. Useful as a front-running mitigation. |
|`_deadline` | `uint256` | latest timestamp to accept this transaction |

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`lpBurned`| `uint256[2]` | amount of LP tokens burned|

### `setAdminFee` {#itenderswapsetadminfeeuint256 }

```solidity
  function setAdminFee(
    uint256 newAdminFee
  ) external
```

Update the admin fee. Admin fee takes portion of the swap fee.


#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`newAdminFee` | `uint256` | new admin fee to be applied on future transactions|


### `setSwapFee` {#itenderswapsetswapfeeuint256 }

```solidity
  function setSwapFee(
    uint256 newSwapFee
  ) external
```

Update the swap fee to be applied on swaps


#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`newSwapFee` | `uint256` | new swap fee to be applied on future transactions|


### `rampA` {#itenderswaprampauint256uint256 }

```solidity
  function rampA(
    uint256 futureA,
    uint256 futureTime
  ) external
```

Start ramping up or down A parameter towards given futureA and futureTime
Checks if the change is too rapid, and commits the new A value only when it falls under
the limit range.


#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`futureA` | `uint256` | the new A to ramp towards |
|`futureTime` | `uint256` | timestamp when the new A should be reached|


### `stopRampA` {#itenderswapstoprampa }

```solidity
  function stopRampA() external
```

Stop ramping A immediately. Reverts if ramp A is already stopped.



### `transferOwnership` {#itenderswaptransferownershipaddress }

```solidity
  function transferOwnership(
    address _newOwner
  ) external
```

Changes the owner of the contract


#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_newOwner` | `address` | address of the new owner|



## Events

### `Swap` {#itenderswapswapaddresscontractierc20uint256uint256 }

```solidity
  event Swap(
  )
```


No description

### `AddLiquidity` {#itenderswapaddliquidityaddressuint2562uint2562uint256uint256 }

```solidity
  event AddLiquidity(
  )
```


No description

### `RemoveLiquidity` {#itenderswapremoveliquidityaddressuint2562uint256 }

```solidity
  event RemoveLiquidity(
  )
```


No description

### `RemoveLiquidityOne` {#itenderswapremoveliquidityoneaddressuint256uint256contractierc20uint256 }

```solidity
  event RemoveLiquidityOne(
  )
```


No description

### `RemoveLiquidityImbalance` {#itenderswapremoveliquidityimbalanceaddressuint2562uint2562uint256uint256 }

```solidity
  event RemoveLiquidityImbalance(
  )
```


No description

### `NewAdminFee` {#itenderswapnewadminfeeuint256 }

```solidity
  event NewAdminFee(
  )
```


No description

### `NewSwapFee` {#itenderswapnewswapfeeuint256 }

```solidity
  event NewSwapFee(
  )
```


No description

### `RampA` {#itenderswaprampauint256uint256uint256uint256 }

```solidity
  event RampA(
  )
```


No description

### `StopRampA` {#itenderswapstoprampauint256uint256 }

```solidity
  event StopRampA(
  )
```


No description

