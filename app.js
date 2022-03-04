import express from 'express';
import path from 'path';
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000
import mintnftRouter from "./routes/mintnft.js"
import mintTokenRouter from "./routes/mint-token.js"
import nftCollectionRouter from "./routes/nftcollection.js"
// const mintnftRouter = require();

app.get('/mintnft', (req, res) => {
  const __dirname = path.resolve();
  res.sendFile(__dirname + "/index.html");
})
app.use("/mintnft",mintnftRouter);
app.use("/mintTokenRouter",mintTokenRouter);
app.use("/createcollection",nftCollectionRouter);
// app.use("/buynft",buyNftRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})