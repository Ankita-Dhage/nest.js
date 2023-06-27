import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

const env = dotenv.config();
export const AppDataSource = new DataSource({
    type: 'mysql',
    host: env.parsed.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    username: env.parsed.DB_USERNAME,
    password: env.parsed.DB_PASSWORD,
    database: env.parsed.DB_DATABASE,
    entities: [__dirname + env.parsed.ENTITIES_PATH],
    logging: true,
    synchronize: JSON.parse(env.parsed.DB_SYNCHRONIZE.toLowerCase()),
    migrationsRun: JSON.parse(env.parsed.MIGRATIONS_RUN.toLowerCase()),
    migrations: [env.parsed.MIGRATIONS_FILE_PATH],
    migrationsTableName: 'all_migration',
})
