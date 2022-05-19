import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ObjectId } from 'bson'

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {

    const {id} = new ObjectId()

    return this.prisma.user.create({
      data: 
      {id, ...createUserDto}
    })
  }

  findAll() {
    return this.prisma.user.findMany({
      select: {
        name:true,
        phone:true,
        email:true,
        company:true
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
