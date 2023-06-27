import { MigrationInterface, QueryRunner } from "typeorm"

export class Unit1672570426562 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `units` (`id` VARCHAR(36) NOT NULL,`name` VARCHAR(255) NOT NULL,`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,`updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,`deleted_at` DATETIME NULL DEFAULT NULL ,PRIMARY KEY(`id`))");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`units\``);
    }  

}
