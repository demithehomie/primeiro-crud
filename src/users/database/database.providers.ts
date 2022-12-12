import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql', //tipo do banco de dadps, poderia ser postgres ou sql server por exemplo

        host: 'localhost', //aqui eu defino meu host
        port: 3306, // aqui eu defino a porta que o meu localhost vai usar
        username: 'root', //nome de usuário no mysql
        password: '', //senha definida no mysql - 'root' ou 'rootroot'
        database: 'ionic_segunda', //nome do banco de dados que acabamos de criar lá no workbench 
        
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true, //tomar muito cuidado pra não utiizar isso COMO TRUE em produção, pois poderá gerar perda de dados
      });

      return dataSource.initialize();
    },
  },
];