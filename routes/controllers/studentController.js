var express = require('express')

var router = express.Router();

const { getStudentService, regStudentService } = require("../services/studentService")

router.get("/get-std", function (req, res, next) {
    console.log("getStudentController")
    const result = getStudentService(req);
    res.send(result)
});

router.post("/reg-std", function (req, res, next) {
    regStudentService(req);
})

module.exports = router;

