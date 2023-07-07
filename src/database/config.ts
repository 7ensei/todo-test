import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';

config();
const configService = new ConfigService();

export const dataSourceOptions = <DataSourceOptions>{
    type: configService.getOrThrow('DB_CONNECTION'),
    host: configService.getOrThrow('DB_HOST'),
    port: configService.getOrThrow('DB_PORT'),
    username: configService.getOrThrow('DB_USER'),
    password: configService.getOrThrow('DB_PASSWORD'),
    database: configService.getOrThrow('DB_DB'),
    entities: [configService.getOrThrow('DB_ENTITIES')],
    migrations: [configService.getOrThrow('DB_MIGRATIONS')],
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;