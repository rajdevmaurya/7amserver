var mongodb = require("mongodb")
var getDB = require("../../common/getDB")
var ObjectId = mongodb.ObjectId

async function getStudentDAO() {
    try {
        console.log("getStudentDAO")
        // connect with DB
        const db = await getDB()
        const collection = db.collection("students")
        const result = await collection.find({}).toArray()
        // send response to service
        return result
    } catch (e) {
        console.error(e);
    } finally {

    }
}

async function regStudentDAO(data) {
    try {
        // connect with DB
        const db = await getDB()
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

async function loginDAO(data) {
    try {
        const db = await getDB();
        const collection = db.collection("students")
        return await collection.find(data).toArray()
    } catch (e) {

    } finally {

    }
}
async function getStdByIdDAO(id) {
    try {
        const db = await getDB();
        const collection = db.collection("students")
        const result = await collection.find({ _id: ObjectId.createFromHexString(id) }).toArray()
        return result;
    } catch (e) {
        console.log(e)
    }

}

async function updateStdDAO(id, data) {
    try {
        const db = await getDB();
        const collection = db.collection("students")
        const res = await collection.updateOne({ _id: ObjectId.createFromHexString(id) }, { $set: data })
        return res;
    } catch (e) {
        console.error(e)
    }
}
async function deleteStdDAO(id) {
    try {
        const db = await getDB();
        const collection = db.collection("students")
        const res = await collection.deleteOne({ _id: ObjectId.createFromHexString(id) })
        return res;
    } catch (e) {
        console.error(e);
    }
}
module.exports = { updateStdDAO, deleteStdDAO, getStudentDAO, regStudentDAO, loginDAO, getStdByIdDAO }