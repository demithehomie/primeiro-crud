import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) { //PartialType cuida pra que não sejam obrigatorios todos os campos

} 
