


## Functions:
- [`initialize`](#liquiditypooltokeninitializestringstring)
- [`mint`](#liquiditypooltokenmintaddressuint256)



## Functions

### `initialize` {#liquiditypooltokeninitializestringstring }

```solidity
  function initialize(
    string name,
    string symbol
  ) external returns (bool)
```

Initializes this LPToken contract with the given name and symbol

Note: The caller of this function will become the owner. A Swap contract should call this in its initializer function. 
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`name` | `string` | name of this token |
|`symbol` | `string` | symbol of this token|


### `mint` {#liquiditypooltokenmintaddressuint256 }

```solidity
  function mint(
    address recipient,
    uint256 amount
  ) external
```

Mints the given amount of LPToken to the recipient.

Note: only owner can call this mint function. 
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`recipient` | `address` | address of account to receive the tokens |
|`amount` | `uint256` | amount of tokens to mint|



## Events

