import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: './prisma/schema/schema.prisma',
  earlyAccess: true,
});
