import { Favorite } from '../entity/Favorite';
import { createConnection, Connection, getConnection } from "typeorm";
import path from 'path'
import logger from "./logger";

const isCompiled = path.extname(__filename).includes('js')
export const ConnectDB = async () => {
    let connection: Connection | undefined
    try {
        connection = getConnection()
    } catch (error) {
        logger.error(`Error getting connections.🚫❌ => ${error}`)
    }

    try {
        if(connection) {
            if(!connection.isConnected) {
                await connection.connect()
            }
        }else {
            await createConnection({
                type: 'postgres',
                name: "default",
                url: 'postgres://tnfunabl:5cMyoiQ8I3fBGIh-0Sod5PvmEmJSN2yl@castor.db.elephantsql.com/tnfunabl',
                entities: [Favorite],
                synchronize: true
            })
        }
        logger.info("Database connected successfully.🚀👌🏾")
    } catch (error: any) {
        logger.error("Connection Error: cannot connect to db", error)
        throw error;
    }
}
