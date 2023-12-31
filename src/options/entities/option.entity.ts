import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Option {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, unique: true })
    name: string;

    @Column({ nullable: false })
    value: string;
}
