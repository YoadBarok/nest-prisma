import { createSchema } from 'schemix';

export const PrismaSchema = createSchema({
  datasource: {
    provider: 'mysql',
    url: {
      env: 'DATABASE_URL',
    },
    relationMode: 'prisma',
  },
  generator: {
    provider: 'prisma-client-js',
    // needed for running on docker:
    binaryTargets: ['native', 'linux-arm64-openssl-3.0.x'],
    output: './src',
  },
});

export const UserModel = PrismaSchema.createModel('User');
export const PostModel = PrismaSchema.createModel('Post');

import './models/User.model';
import './models/Post.model';

PrismaSchema.export('./', './prisma/schema');
