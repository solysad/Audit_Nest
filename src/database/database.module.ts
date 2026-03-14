import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
// import { User } from './user.model';
import { Sequelize } from 'sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql', // ou mysql, sqlite, mssql
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '40028922',
      database: 'project_auditor',
      autoLoadModels: true,
      synchronize: true, // cria tabelas automaticamente
      // models: [User],
    }),
  ],
})
export class DatabaseModule {
  constructor (private readonly sequelize: Sequelize){
    try {
      this.sequelize.authenticate();
      console.log('Conexão com o banco de dados estabelecida com sucesso.');
    } catch (error) {
      console.error('Não foi possível conectar ao banco de dados:', error);
    }
  }
}
