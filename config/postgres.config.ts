import { registerAs } from "@nestjs/config";

export default registerAs('postgres', () => ({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB_NAME,
    entities: [`${__dirname}/../src/**/*.entity{.ts,.js}`],
    // synchronize: process.env.POSTGRES_SYNCHRONIZE === 'true',
    logging: process.env.POSTGRES_LOGGING === 'true',
    migrations: [`${__dirname}/migrations/*{.ts,.js}`],
    migrationsTableName: 'migrations',
    extra: {
        encrypt: process.env.ENVIROMENT === 'prod' ? true : false,
        trustServerCertificate: process.env.ENVIROMENT === 'prod' ? true : false,
    },
    cache: {
        type: 'database',
        duration: 60000,
    },
    ssl: process.env.ENVIROMENT === 'prod' ? true : false
    /* { // Enable SSL for production environments (recommended)
    rejectUnauthorized: false, // Adjust as needed for your security requirements
  }, */
}));