const express = require("express");
const app = express();
const mongoose = require("mongoose");
const user = require("./routes/user");
const auth = require("./routes/auth");
const product = require("./routes/product");
const dotenv = require("dotenv");

//CONNECT TO DB
dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log(err));

//SERVER CONNECTION
const port = process.env.PORT || 5000;

//ROUTES
app.use(express.json());

app.use("/api/v1/user", user);
app.use("/api/v1/auth", auth);
app.use("/api/v1/product", product);

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});