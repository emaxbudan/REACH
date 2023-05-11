const express = require("express");
const {usersRouter} = require("/routes/uroute");

const app = express();

app.use(express.json()); // Helps our app to accept json data
app.use('/routes', usersRouter);

// http://localhost:4321/
app.listen(3000, () => {
  console.log("express server running...");
})