pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

contract MintToken is ERC20, ERC20Detailed {
    constructor() ERC20Detailed("MintToken", "MNT", 10) public {}

    function mint() public {
        _mint(msg.sender, 10000000000);
    }
}
