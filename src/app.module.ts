import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { OptionsModule } from './options/options.module';
import { TransactionsModule } from './transactions/transactions.module';
import { ScheduleModule } from '@nestjs/schedule';
import { CronjobsModule } from './cronjobs/cronjobs.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        ScheduleModule.forRoot(),
        DatabaseModule,
        OptionsModule,
        TransactionsModule,
        CronjobsModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
