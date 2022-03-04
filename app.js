import express from 'express';
const app = express()
const port = 3000
import mintnftRouter from "./routes/mintnft.js"
import mintTokenRouter from "./routes/mint-token.js"
import nftCollectionRouter from "./routes/nftcollection.js"
// const mintnftRouter = require();

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use("/mintnft",mintnftRouter);
app.use("/mintTokenRouter",mintTokenRouter);
app.use("/createcollection",nftCollectionRouter);
// app.use("/buynft",buyNftRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})