const { getStudentDAO, regStudentDAO, loginDAO } = require("../dao/studentDAO")

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
    const data = req.body.data
    const response = await loginDAO(data)
    return response
}

module.exports = { getStudentService, regStudentService, loginService }