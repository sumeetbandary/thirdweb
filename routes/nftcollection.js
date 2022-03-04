import sdk from "../initialize-sdk.js";
import express from "express";
var router = express.Router();

router.post('/', (req, res) => {
  var data = {
    name:  req.body.name,
    collectionDescription: req.body.collectionDescription,
    image: req.body.image,
    sellerFeeBasisPoints : req.body.sellerFeeBasisPoints
  };
  const app = sdk.getAppModule('0xcb1fed1e318B2f676fc2b238A774a93Ed01d530e');
  (async () => {
  try {
    const nftModule = await app.deployNftModule({
      name: data.name,
      description: data.collectionDescription,
      image: data.image,
      sellerFeeBasisPoints: data.image,
      feeRecipient: process.env.WALLET_ADDRESS,
      symbol: 'JS',
    });

    console.log(
      'Successfully deployed nft module, address:',
      nftModule.address
    );
  } catch (error) {
    console.log('failed to deploy nft module', error);
  }
})();
});
// module.exports = router;
export default router;