import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';
import { MoreThan, MoreThanOrEqual, Repository } from 'typeorm';
import { OptionsService } from '../options/options.service';

@Injectable()
export class TransactionsService {
    constructor(
        @InjectRepository(Transaction)
        private readonly transactionRepository: Repository<Transaction>,
        private readonly optionsService: OptionsService,
    ) {
    }

    createMany(transactions: CreateTransactionDto[]) {
        const transaction = transactions.map(item => {
            return this.transactionRepository.create(item);
        });
        return this.transactionRepository.upsert(transaction, ['hash']);
    }

    async findLast(blocks: string) {
        const last = (await this.optionsService.findByName('last_block')).value;
        const where = Number(last) - Number(blocks);
        const transactions = await this.transactionRepository.findBy({
            block: MoreThanOrEqual(where),
        });

        const balances = {};

        transactions.forEach(transaction => {
            balances[transaction.from] = balances[transaction.from] ?? 0;
            balances[transaction.to] = balances[transaction.to] ?? 0;

            balances[transaction.from] -= parseInt(transaction.value);
            balances[transaction.to] += parseInt(transaction.value);
        });

        const balancesArr = [];
        for (const [key, value] of Object.entries(balances)) {
            balancesArr.push({
                address: key,
                delta: Math.abs(<number>value),
            });
        }

        return balancesArr.reduce((acc, curr) => acc.delta > curr.delta ? acc : curr);
    }
}
