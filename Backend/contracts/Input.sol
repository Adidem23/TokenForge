
    // SPDX-License-Identifier : UNLICENSED

    pragma solidity ^0.8.20;

   import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Input is ERC20 {
    address payable public Owner;

    constructor() ERC20("Modi ", "Modz") {
        Owner = payable(msg.sender);
        _mint(Owner, 1000 * (10 ** decimals()));
    }
}
    