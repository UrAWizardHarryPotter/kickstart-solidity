import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x173e3234A0AF33c0F3DF99ab382B7aE59C99067e'
);

export default instance;