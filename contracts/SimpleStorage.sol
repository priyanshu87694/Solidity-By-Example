// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract SimpleStorage {
    uint256 public number;

    // Changing a state variable costs some gas
    function set (uint256 _num) public {
        number = _num;
    }

    // Reading a state variable is free
    function get () public view returns (uint256) {
        return number;
    }
}