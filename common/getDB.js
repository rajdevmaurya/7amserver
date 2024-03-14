var mongodb = require("mongodb")

async function getDB() {
    try {
        const mongoClient = mongodb.MongoClient
        const url = "mongodb+srv://u1:p1@7am.bxn3tzo.mongodb.net/admin?authSource=admin&replicaSet=atlas-3wl1e1-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"
        const server = await mongoClient.connect(url)
        // perform required operation
        const db = server.db("school")
        return db;
    } catch (e) {
        console.error(e)
    }
}

module.exports = getDB