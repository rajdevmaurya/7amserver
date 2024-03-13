const { getStudentDAO, regStudentDAO } = require("../dao/studentDAO")

function getStudentService(req) {
    console.log("getStudentService")
    const data = req.query
    const response = getStudentDAO(data);
    return response
}

async function regStudentService(req) {
    const data = req.body.data;
    const result = await regStudentDAO(data)
    return result;
}

module.exports = { getStudentService, regStudentService }