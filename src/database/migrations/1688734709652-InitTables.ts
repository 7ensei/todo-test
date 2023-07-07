import { MigrationInterface, QueryRunner } from "typeorm";

export class InitTables1688734709652 implements MigrationInterface {
    name = 'InitTables1688734709652'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "transaction" ("id" SERIAL NOT NULL, "block" integer NOT NULL, "hash" character varying NOT NULL, "from" character varying NOT NULL, "to" character varying, "value" character varying NOT NULL, CONSTRAINT "UQ_de4f0899c41c688529784bc443f" UNIQUE ("hash"), CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "idx_block" ON "transaction" ("block") `);
        await queryRunner.query(`CREATE TABLE "option" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "value" character varying NOT NULL, CONSTRAINT "UQ_5e47276c1d6a3fb881283fdbf14" UNIQUE ("name"), CONSTRAINT "PK_e6090c1c6ad8962eea97abdbe63" PRIMARY KEY ("id"))`);
        await queryRunner.query(`INSERT INTO "option" ("name", "value") VALUES ('lock', 'N')`);
        await queryRunner.query(`INSERT INTO "option" ("name", "value") VALUES ('last_block', '17583000')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "option"`);
        await queryRunner.query(`DROP INDEX "public"."idx_block"`);
        await queryRunner.query(`DROP TABLE "transaction"`);
    }

}
