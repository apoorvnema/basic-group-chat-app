const { DataTypes } = require("sequelize");

const database = require("../utils/database");

const Message = database.define("Message", {
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sender: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Message;