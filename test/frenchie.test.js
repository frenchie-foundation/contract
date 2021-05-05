const bn = require('bn.js');
const Frenchie = artifacts.require('Frenchie');

contract('Frenchie', (accounts) => {
  let frenchie;

  before(async () => {
    frenchie = await Frenchie.deployed();
  });

  it('should expect owner balance to be 1 trillion', async () => {
    const expectedSupply = new bn(1e12);
    const balance = await frenchie.balanceOf.call(accounts[0]);
    assert.equal(
      balance.toString(),
      expectedSupply.toString(),
      'Owner balance is not of 1 trillion'
    );
  });

  it('should burn 25% of the supply', async () => {
    const expectedSupplyAfterBurning = new bn(1e12 * 0.75);
    const burnAmount = new bn(1e12 * 0.25);
    await frenchie.burn(burnAmount);
    const balance = await frenchie.balanceOf.call(accounts[0]);
    assert.equal(
      balance.toString(),
      expectedSupplyAfterBurning.toString(),
      'Owner balance is not of 850 billion'
    );
  });
});
