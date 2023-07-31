import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x279202B94d69E8cb87d4748d8D9c5E750aC06D83'
);

export default instance;
