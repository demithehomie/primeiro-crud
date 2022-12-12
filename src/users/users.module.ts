import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { usersProviders } from './users.providers';
import { UsersController } from './users.controller';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    ...usersProviders,
    UsersService]

})
export class UsersModule {}

/*

Podemos fazer isso comtodos os nossos módulos, pra que nem tudp esteja em só um controller, e tudo será importado no app.module 

se o erro

ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client

acontecer, é só rodar LÁ NO WORKBENCH

ALTER USER  'root'@'localhost' IDENTIFIED BY 'root';

flush privileges;

*/
