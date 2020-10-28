const { assert } = require("chai");

describe("MyContract", function() {
  it("should add both the numbers", async function() {
    const Math = await ethers.getContractFactory("Math");
    const math = await Math.deploy();
    await math.deployed();

    const MyContract = await ethers.getContractFactory("MyContract", {
      libraries: { Math: math.address }
    });
    const contract = await MyContract.deploy();
    await contract.deployed();

    assert.equal(await contract.sum(2,3), 5);
  });
});
