//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.0;

contract MyContract {
  function sum(uint x, uint y) public pure returns(uint) {
    return Math.plus(x, y);
  }
}

library Math {
  function plus(uint x, uint y) public pure returns(uint) {
    return x + y;
  }
}
