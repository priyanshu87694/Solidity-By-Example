// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Callee {
    uint public x;
    uint public value;
    function setX (uint _x) public returns (uint) {
        x = _x;
        return x;
    }

    function setXandSendEther (uint _x) public payable returns (uint, uint) {
        x = _x;
        value = msg.value;
        return (x, value);
    }
}

contract Caller {

    function setX (Callee callee, uint _x) public payable {
        uint x = callee.setX(_x);
    }

    function setXFromAddress (address add, uint _x) public payable {
        Callee callee = Callee(add);
        callee.setX(_x);
    }

    function setXandSendEther (Callee callee, uint _x) public payable {
        (uint x, uint value) = callee.setXandSendEther{value: msg.value}(_x);
    }
}