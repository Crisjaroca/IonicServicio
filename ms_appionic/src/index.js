const express = require("express");
const v1Routers = require("./v1/routers/routers");

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use("/api/v1", v1Routers);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
