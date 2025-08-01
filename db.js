const { Schema, default: mongoose, mongo } = require("mongoose");


const ObjectId = mongoose.Types.ObjectId;
const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const adminSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const courseSchma = new Schema({
  title: String,
  description: String,
  price: Number,
  ImageUrl: String,
  creatorId: ObjectId,
});

const purchaseSchema = new Schema({
  userId: ObjectId,
  courseId: ObjectId,
});

const userModel = mongoose.model("user", userSchema);



const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchma);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
  userModel,
  adminModel,
  courseModel,
  purchaseModel,
};
