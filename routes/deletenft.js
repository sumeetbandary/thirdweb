import sdk from "../initialize-sdk.js";
import express from "express";
var router = express.Router();


router.post('/' , (req , res)=>{
  const tokenId = req.body.id;
  const NFTAddress = "0xb27F51c3934E2Ec9DA9234C6eb8edB56ad8f08a0";
  const module = sdk.getNFTModule(NFTAddress);
  (async () => {
    try {
      await module.burn(tokenId);
      res.send("Deleted" + ' ' + tokenId)
    } catch (error) {
      console.error('Failed to delete the nft', error);
    }
  })();
});

export default router;