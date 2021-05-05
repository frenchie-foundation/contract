const bn = require('bn.js');

const Frenchie = artifacts.require('Frenchie');
const FrenchieFarm = artifacts.require('FrenchieFarm');

module.exports = async function (deployer) {
  const frenchie = await Frenchie.deployed();
  const rewards = new bn(10).pow(new bn(18)).mul(new bn(5000));

  // IERC20 _erc20,
  // uint256 _rewardPerBlock,
  // uint256 _startBlock
  deployer.deploy(FrenchieFarm, frenchie.address, rewards.toString(10), 10);
};
