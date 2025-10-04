// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract TxRegister {
    mapping(address => bool) public registered;

    event Registered(address user);

    function register() external {
        require(!registered[msg.sender], "Already registered");
        registered[msg.sender] = true;
        emit Registered(msg.sender);
    }
}
