import { UserModel, PostModel } from '../../prisma/index';

UserModel.int('id', { id: true, default: { autoincrement: true } })
  .string('email', { unique: true })
  .string('name', { optional: true })
  .relation('posts', PostModel, { list: true })
  .raw('@@map("service_user")');
