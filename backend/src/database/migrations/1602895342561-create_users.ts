import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class users1602895342561 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
               { 
                name: 'id',
                type: 'integer',
                unsigned: true,
                isPrimary: true,
                generationStrategy: 'increment'
            },

            {
                name: 'name',
                type: 'varchar'
            },

            {
                name: 'email',
                type: 'varchar',
                isUnique: true,
            },

            {
                name: 'password',
                type: 'varchar'
            }

            ]
       }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }
    
}
