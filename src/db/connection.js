const db = require("./config")

const connection = async() => {
    await db.authenticate();
    console.log('Database online');
}

module.exports = {
    connection
}