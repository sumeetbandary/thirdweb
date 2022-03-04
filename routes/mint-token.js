import { ethers } from "ethers";
import sdk from "../initialize-sdk.js";
import express from "express";
var router = express.Router();

router.get('/', (req, res) => {
  const tokenModule = sdk.getTokenModule("0x0E3400B577fAB151b1987b94097B5c0e7C7D3b95");

  (async () => {
    try {
      const amount = 1_000_000;
      const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);
      await tokenModule.mint(amountWith18Decimals);
      const totalSupply = await tokenModule.totalSupply();

      console.log(
        "There now is",
        ethers.utils.formatUnits(totalSupply, 18),
        "$TOKEN in circulation"
      );
    } catch (error) {
      console.error("Failed to mint tokens", error);
    }
  })();
});

export default router;