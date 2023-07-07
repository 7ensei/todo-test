import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { EtherjobHandleService } from './etherjob.handle.service';

@Injectable()
export class EtherjobService {
    constructor(
        private etherHandleService: EtherjobHandleService,
    ) {
    }

    @Cron(CronExpression.EVERY_MINUTE)
    async etherscanView() {
        await this.etherHandleService.etherscanView();
    }
}
