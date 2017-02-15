const connection = require('./connection.js');

module.exports = {
    selectAll: (tableName, callback) => {
        connection.query(
            `SELECT * FROM ${tableName};`,
            (err, res) => {
                err ? console.log(error) : callback(res);

            }
        )
    },
    insertOne: () => {

    },
    updateOne: () => {

    }
}