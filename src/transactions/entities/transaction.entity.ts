import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Index('idx_block')
    @Column()
    block: number;


    @Column({ unique: true })
    hash: string;

    @Column()
    from: string;

    @Column({ nullable: true })
    to: string | null;

    @Column()
    value: string;
}
