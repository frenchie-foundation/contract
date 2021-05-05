const Frenchie = artifacts.require('Frenchie');

module.exports = function (deployer) {
  // string memory name,
  // string memory symbol,
  // uint8 decimals,
  // uint256 totalSupply,
  // address payable feeReceiver,
  // address tokenOwnerAddress
  deployer.deploy(
    Frenchie,
    'Frenchie',
    'FREN',
    18,
    '1000000000000',
    '0xe8a5e64E6EBb88F7DdCE7C91723e4d92b73B8FFc',
    '0xe8a5e64E6EBb88F7DdCE7C91723e4d92b73B8FFc'
  );
};
