import { DataSource } from 'typeorm'
import * as dotenv from 'dotenv';

const env = dotenv.config();
export const AppDataSource = new DataSource({
    type: 'better-sqlite3',
    database: env.parsed.DB_SQLITE_FILEPATH,
    entities: [__dirname + env.parsed.ENTITIES_PATH],
    synchronize: JSON.parse(env.parsed.DB_SYNCHRONIZE.toLowerCase()),
    logging: true,
    migrationsRun: JSON.parse(env.parsed.MIGRATIONS_RUN.toLowerCase()),
    migrations: [env.parsed.TEST_MIGRATIONS_FILE_PATH],
    migrationsTableName: 'all_migrations'
})
