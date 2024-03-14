var express = require('express')

var router = express.Router();

const { getStudentService, regStudentService, loginService } = require("../services/studentService")

router.get("/get-std", async function (req, res, next) {
    console.log("getStudentController")
    const result = await getStudentService(req);
    res.send(result)
});

/**
 * url: http://localhost:2020/std/reg-std
 * method: post
 * data:{}
 */
router.post("/reg-std", async function (req, res, next) {
    const result = await regStudentService(req);
    res.send(result)
})


router.post("/login", async function (req, res, next) {
    const response = await loginService(req)
    res.send(response)
})



module.exports = router;

