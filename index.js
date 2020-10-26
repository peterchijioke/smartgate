const express = require("express");
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  res.header("Allow", "POST", "GET", "PUT", "OPTIONS", "DELETE");
  res.header(
    "Access-control-Allow-Headers",
    "POST",
    "GET",
    "PUT",
    "OPTIONS",
    "DELETE"
  );
  next();
});

// initialize router

app.use("/newUser", require("./routes/userRoute"));
app.get("/", (req, res) => {
  res.send("welcome page");
});

// initialze
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port`);
});
