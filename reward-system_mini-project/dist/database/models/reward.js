"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = require("../index"); // Import sequelize from the index.ts file
class Reward extends sequelize_1.Model {
}
Reward.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    score: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    rewardType: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: index_1.sequelize, // The sequelize instance
    tableName: 'rewards', // The table name in MySQL
    timestamps: true, // This will automatically add 'createdAt' and 'updatedAt' columns
});
exports.default = Reward;
