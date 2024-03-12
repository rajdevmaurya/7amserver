const { getStudentDAO, regStudentDAO } = require("../dao/studentDAO")

function getStudentService(req) {
    console.log("getStudentService")
    const data = req.query
    const response = getStudentDAO(data);
    return response
}

function regStudentService(req) {
    const data = req.body.data
    regStudentDAO(data)
}

module.exports = { getStudentService, regStudentService }