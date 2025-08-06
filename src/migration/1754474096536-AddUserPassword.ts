import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserPassword1754474096536 implements MigrationInterface {
    name = 'AddUserPassword1754474096536'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD "password" character varying NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "password"
        `);
    }

}
