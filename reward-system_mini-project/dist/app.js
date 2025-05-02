"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
database_1.sequelize.sync({ force: false }).then(() => {
    console.log('Database synced successfully!');
}).catch((error) => {
    console.error('Error syncing the database:', error);
});
