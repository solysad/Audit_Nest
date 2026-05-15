import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'desenvolvimento',
      password: '123456789',
      database: 'project_auditor',
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  providers: [],
  exports: [SequelizeModule],
})
export class DatabaseModule {
  constructor() {
    console.log('DatabaseModule carregado.');
  }
}
