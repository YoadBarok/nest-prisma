import { PostModel, UserModel } from '../../prisma/index';

PostModel.int('id', { id: true, default: { autoincrement: true } })
  .string('title')
  .string('content')
  .boolean('published', { default: false })
  .relation('author', UserModel, {
    optional: true,
    fields: ['authorId'],
    references: ['id'],
  })
  .int('authorId', {})
  .raw('@@index([authorId])'); // Use raw to add the index manually
