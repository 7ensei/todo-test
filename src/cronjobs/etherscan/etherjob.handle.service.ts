import { Injectable } from '@nestjs/common';
import { EtherscanApiClient } from '../../utilities/clients/etherscan/etherscan-api-client';
import { OptionsService } from '../../options/options.service';
import { TransactionsService } from '../../transactions/transactions.service';
import { CreateTransactionDto } from '../../transactions/dto/create-transaction.dto';

@Injectable()
export class EtherjobHandleService {
    constructor(
        private optionsService: OptionsService,
        private transactionsService: TransactionsService,
        private etherscanClient: EtherscanApiClient,
    ) {
    }

    async etherscanView() {
        try {
            await this.isLocked();
            await this.lock();
            await this.writeTransactions();
            await this.unlock();
        } catch (e) {
            console.log(e);
        }
    }

    async isLocked() {
        const lock = (await this.optionsService.findByName('lock')).value;
        if (lock === 'Y') throw Error('Блокировка...');
    }

    async lock() {
        await this.optionsService.update('lock', { value: 'Y' });
    }

    async unlock() {
        await this.optionsService.update('lock', { value: 'N' });
    }

    async writeTransactions() {
        let sysLast = parseInt((await this.optionsService.findByName('last_block')).value);
        const last = parseInt(await this.etherscanClient.last());

        while (sysLast < last) {
            const block = await this.etherscanClient.show(sysLast);
            const transactions = block.result.transactions.map((transaction) => {
                return <CreateTransactionDto>{
                    block: parseInt(transaction.blockNumber),
                    hash: transaction.hash,
                    from: transaction.from,
                    to: transaction.to,
                    value: transaction.value,
                };
            });
            await this.transactionsService.createMany(transactions);

            sysLast++;
            await this.optionsService.update('last_block', { value: sysLast });
        }
    }
}
