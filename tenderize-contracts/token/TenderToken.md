
TenderToken balances are dynamic and are calculated based on the accounts' shares
and the total amount of Tokens controlled by the protocol. Account shares aren't
normalized, so the contract also stores the sum of all shares to calculate
each account's token balance which equals to:

shares[account] * _getTotalPooledTokens() / _getTotalShares()

## Functions:
- [`initialize`](#itendertokeninitializestringstringcontractitotalstakedreader)
- [`decimals`](#itendertokendecimals)
- [`totalSupply`](#itendertokentotalsupply)
- [`getTotalPooledTokens`](#itendertokengettotalpooledtokens)
- [`getTotalShares`](#itendertokengettotalshares)
- [`balanceOf`](#itendertokenbalanceofaddress)
- [`sharesOf`](#itendertokensharesofaddress)
- [`allowance`](#itendertokenallowanceaddressaddress)
- [`tokensToShares`](#itendertokentokenstosharesuint256)
- [`sharesToTokens`](#itendertokensharestotokensuint256)
- [`transfer`](#itendertokentransferaddressuint256)
- [`approve`](#itendertokenapproveaddressuint256)
- [`transferFrom`](#itendertokentransferfromaddressaddressuint256)
- [`increaseAllowance`](#itendertokenincreaseallowanceaddressuint256)
- [`decreaseAllowance`](#itendertokendecreaseallowanceaddressuint256)
- [`mint`](#itendertokenmintaddressuint256)
- [`burn`](#itendertokenburnaddressuint256)
- [`setTotalStakedReader`](#itendertokensettotalstakedreadercontractitotalstakedreader)



## Functions

### `initialize` {#itendertokeninitializestringstringcontractitotalstakedreader }

```solidity
  function initialize(
    string _name,
    string _symbol,
    contract ITotalStakedReader _stakedReader
  ) external returns (bool)
```

Initilize the TenderToken Contract


#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_name` | `string` | name of the token (steak) |
|`_symbol` | `string` | symbol of the token (steak) |
|`_stakedReader` | `contract ITotalStakedReader` | contract address implementing the ITotalStakedReader interface |

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|``| `bool` | boolean value indicating whether the init succeeded. |

### `decimals` {#itendertokendecimals }

```solidity
  function decimals() external returns (uint8)
```

The number of decimals the TenderToken uses.



#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|``| `uint8` | the number of decimals for getting user representation of a token amount. |

### `totalSupply` {#itendertokentotalsupply }

```solidity
  function totalSupply() external returns (uint256)
```

The total supply of tender tokens in existence.

Note: Always equals to `_getTotalPooledTokens()` since token amount is pegged to the total amount of Tokens controlled by the protocol. 

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|``| `uint256` | total supply |

### `getTotalPooledTokens` {#itendertokengettotalpooledtokens }

```solidity
  function getTotalPooledTokens() external returns (uint256)
```

Total amount of underlying tokens controlled by the Tenderizer.

Note: The sum of all Tokens balances in the protocol, equals to the total supply of TenderToken. 

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|``| `uint256` | total amount of pooled tokens |

### `getTotalShares` {#itendertokengettotalshares }

```solidity
  function getTotalShares() external returns (uint256)
```

The total amount of shares in existence.

Note: The sum of all accounts' shares can be an arbitrary number, therefore it is necessary to store it in order to calculate each account's relative share. 

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|``| `uint256` | total amount of shares |

### `balanceOf` {#itendertokenbalanceofaddress }

```solidity
  function balanceOf(
    address _account
  ) external returns (uint256)
```

the amount of tokens owned by the `_account`.

Note: Balances are dynamic and equal the `_account`'s share in the amount of the         total Tokens controlled by the protocol. See `sharesOf`. 
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_account` | `address` | address of the account to check the balance for |

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|``| `uint256` | token balance of `_account` |

### `sharesOf` {#itendertokensharesofaddress }

```solidity
  function sharesOf(
    address _account
  ) external returns (uint256)
```

The amount of shares owned by an account


#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_account` | `address` | address of the account |

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|``| `uint256` | the amount of shares owned by `_account`. |

### `allowance` {#itendertokenallowanceaddressaddress }

```solidity
  function allowance(
    address _owner,
    address _spender
  ) external returns (uint256)
```

The remaining number of tokens that `_spender` is allowed to spend
behalf of `_owner` through `transferFrom`. This is zero by default.

Note: This value changes when `approve` or `transferFrom` is called. 
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_owner` | `address` | address that approved the allowance |
|`_spender` | `address` | address that is allowed to spend the allowance |

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|``| `uint256` | amount '_spender' is allowed to spend from '_owner' |

### `tokensToShares` {#itendertokentokenstosharesuint256 }

```solidity
  function tokensToShares(
    uint256 _tokens
  ) external returns (uint256)
```

The amount of shares that corresponds to `_tokens` protocol-controlled Tokens.


#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_tokens` | `uint256` | amount of tokens to calculate shares for |

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|``| `uint256` | nominal amount of shares the tokens represent |

### `sharesToTokens` {#itendertokensharestotokensuint256 }

```solidity
  function sharesToTokens(
    uint256 _shares
  ) external returns (uint256)
```

The amount of tokens that corresponds to `_shares` token shares.


#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_shares` | `uint256` | the amount of shares to calculate the amount of tokens for |

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|``| `uint256` | the amount of tokens represented by the shares |

### `transfer` {#itendertokentransferaddressuint256 }

```solidity
  function transfer(
    address _recipient,
    uint256 _amount
  ) external returns (bool)
```

Transfers `_amount` tokens from the caller's account to the `_recipient` account.

Note: Emits a `Transfer` event. Requirements: - `_recipient` cannot be the zero address. - the caller must have a balance of at least `_amount`. The `_amount` argument is the amount of tokens, not shares.
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_recipient` | `address` | address of the recipient |
|`_amount` | `uint256` | amount of tokens to transfer |

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|``| `bool` | a boolean value indicating whether the operation succeeded.  |

### `approve` {#itendertokenapproveaddressuint256 }

```solidity
  function approve(
    address _spender,
    uint256 _amount
  ) external returns (bool)
```

Sets `_amount` as the allowance of `_spender` over the caller's tokens.

Note: Emits an `Approval` event. Requirements: - `_spender` cannot be the zero address. The `_amount` argument is the amount of tokens, not shares.
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_spender` | `address` | address of the spender allowed to approve tokens from caller |
|`_amount` | `uint256` | amount of tokens to allow '_spender' to spend |

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|``| `bool` | a boolean value indicating whether the operation succeeded.  |

### `transferFrom` {#itendertokentransferfromaddressaddressuint256 }

```solidity
  function transferFrom(
    address _sender,
    address _recipient
  ) external returns (bool)
```

Transfers `_amount` tokens from `_sender` to `_recipient` using the
allowance mechanism. `_amount` is then deducted from the caller's allowance.

Note: Emits a `Transfer` event. Emits an `Approval` event indicating the updated allowance. Requirements: - `_sender` and `_recipient` cannot be the zero addresses. - `_sender` must have a balance of at least `_amount`. - the caller must have allowance for `_sender`'s tokens of at least `_amount`. The `_amount` argument is the amount of tokens, not shares.
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_sender` | `address` | address of the account to transfer tokens from |
|`_recipient` | `address` | address of the recipient |

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|``| `bool` | a boolean value indicating whether the operation succeeded.  |

### `increaseAllowance` {#itendertokenincreaseallowanceaddressuint256 }

```solidity
  function increaseAllowance(
    address _spender,
    uint256 _addedValue
  ) external returns (bool)
```

Atomically increases the allowance granted to `_spender` by the caller by `_addedValue`.

Note: This is an alternative to `approve` that can be used as a mitigation for problems described in: https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/IERC20.sol#L42 Emits an `Approval` event indicating the updated allowance. Requirements: - `_spender` cannot be the the zero address.
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_spender` | `address` | address of the spender allowed to approve tokens from caller |
|`_addedValue` | `uint256` | amount to add to allowance |

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|``| `bool` | a boolean value indicating whether the operation succeeded.  |

### `decreaseAllowance` {#itendertokendecreaseallowanceaddressuint256 }

```solidity
  function decreaseAllowance(
    address _spender,
    uint256 _subtractedValue
  ) external returns (bool)
```

Atomically decreases the allowance granted to `_spender` by the caller by `_subtractedValue`.

Note: This is an alternative to `approve` that can be used as a mitigation for problems described in: https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/IERC20.sol#L42 Emits an `Approval` event indicating the updated allowance. Requirements: - `_spender` cannot be the zero address. - `_spender` must have allowance for the caller of at least `_subtractedValue`.
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_spender` | `address` | address of the spender allowed to approve tokens from caller |
|`_subtractedValue` | `uint256` | amount to subtract from current allowance |

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|``| `bool` | a boolean value indicating whether the operation succeeded.  |

### `mint` {#itendertokenmintaddressuint256 }

```solidity
  function mint(
    address _recipient,
    uint256 _amount
  ) external returns (bool)
```

Mints '_amount' of tokens for '_recipient'

Note: Only callable by contract owner Calculates the amount of shares to create based on the specified '_amount' and creates new shares rather than minting actual tokens '_recipient' should also deposit into Tenderizer atomically to prevent diluation of existing particpants
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_recipient` | `address` | address to mint tokens for |
|`_amount` | `uint256` | amount to mint |

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|``| `bool` | a boolean value indicating whether the operation succeeded.  |

### `burn` {#itendertokenburnaddressuint256 }

```solidity
  function burn(
    address _account,
    uint256 _amount
  ) external returns (bool)
```

Burns '_amount' of tokens from '_recipient'

Note: Only callable by contract owner Calculates the amount of shares to destroy based on the specified '_amount' and destroy shares rather than burning tokens '_recipient' should also withdraw from Tenderizer atomically
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_account` | `address` | address to burn the tokens from |
|`_amount` | `uint256` | amount to burn |

#### Return Values:

| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|``| `bool` | a boolean value indicating whether the operation succeeded.  |

### `setTotalStakedReader` {#itendertokensettotalstakedreadercontractitotalstakedreader }

```solidity
  function setTotalStakedReader(
    contract ITotalStakedReader _stakedReader
  ) external
```

sets a TotalStakedReader to read the total staked tokens from

Note: Only callable by contract owner. Used to determine TenderToken total supply.
#### Parameters:

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_stakedReader` | `contract ITotalStakedReader` | contract address implementing the ITotalStakedReader interface |



## Events

