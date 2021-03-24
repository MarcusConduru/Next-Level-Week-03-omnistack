import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1605188775696 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // REALIZAR ALTERAÇÕES
        // CRIAR TABELA,CRIAR UM NOVO CAMPO, DELETAR ALGUM CAMPO
        await queryRunner.createTable(new Table({
            name: 'orphanages',
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
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2
                },
                {
                    name: 'about',
                    type: 'text',
                },
                {
                    name: 'opening_hours',
                    type: 'varchar'
                },
                {
                    name: 'instructions',
                    type: 'text'
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // DESFAZER O QUE FOI FEITO NO METODO UP
        await queryRunner.dropTable('orphanages');
    }

}
