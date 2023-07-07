import { Controller, Get, Param } from '@nestjs/common';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
    constructor(private readonly transactionsService: TransactionsService) {
    }

    @Get('max/delta/:block')
    async findLast(@Param('block') block: string) {
        return await this.transactionsService.findLast(block);
    }
}
