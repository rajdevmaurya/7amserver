const { getStudentDAO, regStudentDAO, loginDAO, getStdByIdDAO } = require("../dao/studentDAO")
const jwt = require('jsonwebtoken');

async function getStudentService() {
    console.log("getStudentService")
    const response = await getStudentDAO();
    return response.map((obj) => {
        delete obj.pwd
        return obj;
    })
}

async function regStudentService(req) {
    const data = req.body.data;
    const result = await regStudentDAO(data)
    return result;
}

async function loginService(req) {
    const user = req.body.data
    const response = await loginDAO(user)
    console.log(response)
    if (response.length > 0) {
        const token = jwt.sign(user, "myToken")
        delete response[0].pwd;
        response[0].token = token
    }

    return response
}

async function getStdByIdService(req) {
    const id = req.query.id;
    const result = await getStdByIdDAO(id);
    return result;
}

module.exports = { getStudentService, regStudentService, loginService, getStdByIdService }

