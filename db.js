const {Schema, default: mongoose} = require("mongoose");
const userSchema = Schema({

});

const adminSchema = Schema({

});

const courseSchma = Schema({

});

const purchaseSchema = Schema({

});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", userSchema);
const courseModel = mongoose.model("course", userSchema);
const purchaseModel = mongoose.model("purchase", userSchema  );