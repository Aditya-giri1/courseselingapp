const express = require("express");
const { userRouter } = require("./routes/user");
const { courseRourter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express();

app.use("/user", userRouter);
app.use("/course", courseRourter);
app.use("/admin", adminRouter)




app.listen(3000);