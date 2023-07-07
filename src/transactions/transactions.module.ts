import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';
import { OptionsModule } from '../options/options.module';

@Module({
    imports: [TypeOrmModule.forFeature([Transaction]), OptionsModule],
    controllers: [TransactionsController],
    providers: [TransactionsService],
    exports: [TransactionsService],
})
export class TransactionsModule {
}
