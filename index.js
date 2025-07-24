const express = require("express");
const { userRouter } = require("./routes/user");
const { courseRourter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const { default: mongoose } = require("mongoose");

const app = express();

app.use("/user", userRouter);
app.use("/course", courseRourter);
app.use("/admin", adminRouter);

async function main() {
  await mongoose.connect(
    "mongodb+srv://adityagiri8520:BlGUVIPpm4nLKMBV@cluster0.nm5f3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  app.listen(3000);
  console.log("listening on port 3000");
}
main();
