"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectDB = void 0;
const Favorite_1 = require("../entity/Favorite");
const typeorm_1 = require("typeorm");
const path_1 = __importDefault(require("path"));
const logger_1 = __importDefault(require("./logger"));
const isCompiled = path_1.default.extname(__filename).includes('js');
const ConnectDB = async () => {
    let connection;
    try {
        connection = (0, typeorm_1.getConnection)();
    }
    catch (error) {
        logger_1.default.error(`Error getting connections.🚫❌ => ${error}`);
    }
    try {
        if (connection) {
            if (!connection.isConnected) {
                await connection.connect();
            }
        }
        else {
            await (0, typeorm_1.createConnection)({
                type: 'postgres',
                name: "default",
                url: 'postgres://tnfunabl:5cMyoiQ8I3fBGIh-0Sod5PvmEmJSN2yl@castor.db.elephantsql.com/tnfunabl',
                entities: [Favorite_1.Favorite],
                synchronize: true
            });
        }
        logger_1.default.info("Database connected successfully.🚀👌🏾");
    }
    catch (error) {
        logger_1.default.error("Connection Error: cannot connect to db", error);
        throw error;
    }
};
exports.ConnectDB = ConnectDB;
