import { expect } from "chai";
import hre from "hardhat";

describe("Gumball", function () {
  it("Should have the right number of gumballs", async function () {
    const [owner] = await hre.ethers.getSigners();

    // deploy a gumball contract
    const gumballMachine = await hre.ethers.deployContract("GumballMachine");

    // assert that the value is correct
    expect(await gumballMachine.getNumberOfGumballs()).to.equal(100);

    await gumballMachine.getGumball();
    expect(await gumballMachine.getNumberOfGumballs()).to.equal(99);

    await gumballMachine.addFreshGumballs(50);
    expect(await gumballMachine.getNumberOfGumballs()).to.equal(149);

    try {
        await gumballMachine.addFreshGumballs(-1);
        expect.fail("Function should have reverted");
    } catch (error) {
        expect(error.message).to.contain("out-of-bounds")
    }
  });
});