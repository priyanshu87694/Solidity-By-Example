// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Counter {
    uint256 public counter;

    function getCounter () public view returns (uint256) {
        return counter;
    }

    function decreament () public {
        counter = counter - 1;
    }

    function increament () public {
        counter = counter + 1;
    }
}