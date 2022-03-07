import sdk from "../initialize-sdk.js";
import express from "express";
var router = express.Router();

router.post('/', (req, res) => {
  var data = {
    nftName:  req.body.nftName,
    nftDescription: req.body.nftDescription,
    image: req.body.image
  };
  const NFTAddress = "0xb27F51c3934E2Ec9DA9234C6eb8edB56ad8f08a0";
  const nft = sdk.getNFTModule(NFTAddress);
  (async () => {
    try {
      await nft.mint({
        name: data.nftName,
        description: data.nftDescription,
        image: data.image,
        properties: {},
      });
      console.log('Successfully created a new NFT in the collection!');
    } catch (error) {
      console.error('failed to create the new NFT', error);
    }
  })();
  res.send("Created nft");
});
// module.exports = router;
export default router;