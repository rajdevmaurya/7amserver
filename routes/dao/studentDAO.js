var mongodb = require("mongodb")

function getStudentDAO(data) {
    console.log("getStudentDAO")
    // connect with DB

    // perform required operation

    // send response to service
    return "get call"
}

async function regStudentDAO(data) {
    try {
        // connect with DB
        const mongoClient = mongodb.MongoClient
        const url = "mongodb+srv://u1:p1@7am.bxn3tzo.mongodb.net/admin?authSource=admin&replicaSet=atlas-3wl1e1-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"
        const server = await mongoClient.connect(url)
        const db = server.db("school")
        const collection = db.collection("students")
        // perform required operation
        const result = await collection.insertOne(data)
        // send response to service
        return result
    } catch (e) {
        console.error(e)
    } finally {

    }

}

module.exports = { getStudentDAO, regStudentDAO }