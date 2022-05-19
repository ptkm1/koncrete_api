import { Prisma } from "@prisma/client";


export class CreateUserDto implements Prisma.UserCreateInput {
  id: Buffer;
  name: string;
  email: string;
  phone: string;
  company: string;
  questions?: any;
  average?: number;
}
