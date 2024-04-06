var express = require('express')
var jwt = require('jsonwebtoken')
var router = express.Router();
var validateToken = require('../../common/validateToken')
const { updateStudentService, deleteStudentService, getStudentService, regStudentService, loginService, getStdByIdService } = require("../services/studentService")

router.get(
    "/get-std",
    validateToken,
    async function (req, res, next) {
        console.log("getStudentController")
        const result = await getStudentService(req);
        res.send(result)
    });

router.get(
    '/get-std-by-id',
    validateToken,
    function () {

    })

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

router.get("/get-user-by-id", validateToken, async function (req, res, next) {
    const result = await getStdByIdService(req)
    res.send(result);
})

router.put('/update-std/:id', validateToken, async function (req, res, next) {
    const result = await updateStudentService(req)
    res.send(result);
})

router.delete('/delete-student', validateToken, async function (req, res, next) {
    const result = await deleteStudentService(req)
    res.send(result)
})



module.exports = router;

