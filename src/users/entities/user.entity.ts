import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'; //copiamos esse import lá da documentação do TypeOrm

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column ({length: 100})
    name: string;
   
    @Column ({length: 100})
    email: string;

    @Column({length: 50})
    password: string;
}
