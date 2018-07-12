var SafeMath = artifacts.require('./SafeMath.sol');
var Ownable = artifacts.require('./Ownable.sol');
var Pausable = artifacts.require('./Pausable.sol');
var Contactable = artifacts.require('./Contactable.sol');
var ERC20 = artifacts.require('./ERC20.sol');
var StabiXPresaleToken = artifacts.require('./StabiXPresaleToken.sol');
var Crowdsale = artifacts.require('./StabiXPresale.sol');

// 

 /**
* Standard constructor arguments for Crowdsale contract:
* @param wallet that ultimately receives ether sent to the crowdsale contract
* @param minimum investment in ether
* @param crowdsale token cap
* @param rate : amounts of tokens received for 1 ether invested
* @param decimals
* deployer.deploy(Crowdsale, '0x00000000000000', 10, 295257, 20, 18, {gas: 3000000, gasPrice: 1000000000});
*/ 

var wallet = '0x8EaEB1AFE479B0C8a00dec48ccDDDEE9CdeBd014';
var minInvestment = (10 ** 14) * 1;
var tokenCap = 10000000;
var rate = 18;
var gas = 3*10**6;
var gasPrice = 40*10**9;

module.exports = function(deployer) {
  deployer.deploy(SafeMath, {gas: gas, gasPrice: gasPrice });
  deployer.link(SafeMath, Crowdsale);
  deployer.link(SafeMath, StabiXPresaleToken);
  // deployer.deploy(Ownable, {gas: gas, gasPrice: gasPrice  });
  // deployer.deploy(Pausable, {gas: gas, gasPrice: gasPrice  });
  // deployer.deploy(Contactable, {gas: gas, gasPrice: gasPrice  });
  // deployer.deploy(StabiXPresaleToken, {gas: gas, gasPrice: gasPrice  });
  deployer.deploy(Crowdsale, wallet, minInvestment, tokenCap, rate, {gas: gas, gasPrice: gasPrice });
};








