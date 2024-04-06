import { defineDb, defineTable, column, NOW } from 'astro:db';

const Comment = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    slug: column.text(),
    published: column.date({ default: NOW }),
    author: column.text(),
    body: column.text()
  }
});

export default defineDb({
  tables: { Comment }
});
