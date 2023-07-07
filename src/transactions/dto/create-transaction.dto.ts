export class CreateTransactionDto {
    id: number;
    block: number;
    hash: string;
    from: string;
    to?: string;
    value: string;
}
