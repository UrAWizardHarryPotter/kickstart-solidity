const HDWalletprovider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletprovider(
  'satisfy problem weekend enforce marble orbit wink feel cost claw security hedgehog',
  'https://rinkeby.infura.io/v3/1a713903bd0b4688875301d0d66ff9a4'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

    console.log('Countract deployed to', result.options.address);
};

deploy();