pragma solidity ^0.8.24;

contract GumballMachine {
    uint numberOfGumballs = 100;

    constructor() {

    }

    function getGumball() public {
        numberOfGumballs--;
    }

    function addFreshGumballs(uint input) public {
        require(input > 0);
        numberOfGumballs += input;
    }

    function getNumberOfGumballs() public view returns (uint) {
        return numberOfGumballs;
    }

}