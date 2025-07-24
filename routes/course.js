const express = require("express")
const Router = express.Router;
const courseRourter = Router();
courseRourter.post("/puchase", function(req, res){
    res.json({
        message: "signup endpoint"
    })
})



courseRourter.get("/preview", function(req, res){
    res.json({
        message: "course preview endpoint"
    })
})
module.exports = {
  courseRourter: courseRourter,
};