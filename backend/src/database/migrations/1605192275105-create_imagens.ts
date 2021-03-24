import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImagens1605192275105 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true, //NÃO PERMITE VALOR NEGATIVO
                    isPrimary: true, // INDICA QUE A COLUNA É A PRIMARY KEY
                    isGenerated: true, // A COLUNA É GERADA AUTOMATICAMENTE
                    generationStrategy: 'increment' //AUTO-INCREMENTE
                },
                {
                    name: 'path',
                    type: 'varchar',
                },
                {
                    name: 'orphanage_id',
                    type: 'integer'
                }
            ],
            foreignKeys: [
                {
                    name: 'ImageOrphanage',
                    columnNames: ['orphanage_id'],
                    referencedTableName: 'orphanages',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images');
    }

}
