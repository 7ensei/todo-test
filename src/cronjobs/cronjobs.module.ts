import { Module } from '@nestjs/common';
import { EtherjobModule } from './etherscan/etherjob.module';

@Module({
    imports: [EtherjobModule],
})
export class CronjobsModule {
}
