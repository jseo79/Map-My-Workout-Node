"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const knexConnection = (0, knex_1.default)({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'admin',
        password: 'admin',
        database: 'dev_db',
    },
    migrations: {
        directory: './migrations',
    },
});
exports.default = knexConnection;
//# sourceMappingURL=index.js.map