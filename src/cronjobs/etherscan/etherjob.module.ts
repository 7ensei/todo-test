import { Module } from '@nestjs/common';
import { EtherjobService } from './etherjob.service';
import { EtherscanApiClient } from '../../utilities/clients/etherscan/etherscan-api-client';
import { OptionsModule } from '../../options/options.module';
import { TransactionsModule } from '../../transactions/transactions.module';
import { EtherjobHandleService } from './etherjob.handle.service';

@Module({
    imports: [OptionsModule, TransactionsModule],
    providers: [EtherjobService, EtherscanApiClient, EtherjobHandleService],
    exports: [EtherjobService],
})
export class EtherjobModule {
}
