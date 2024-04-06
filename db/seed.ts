import { db, Comment } from 'astro:db';

export default async function() {
  await db.insert(Comment).values([
    {
      id: 1,
      slug: 'apa-saja-yang-bisa-dilakukan-di-blog-ini',
      author: 'rahmatt@gmail.com',
      published: new Date('2024-04-01'),
      body: 'Good'
    },
    {
      id: 2,
      slug: 'apa-saja-yang-bisa-dilakukan-di-blog-ini',
      author: 'rahmat21@gmail.com',
      body: 'Good Article'
    },
    {
      id: 3,
      slug: 'fifth-post',
      author: 'rahmat1123@gmail.com',
      published: new Date('2024-03-02'),
      body: 'Bad Article'
    },
    {
      id: 4,
      slug: 'fifth-post',
      author: 'rahmat1234@gmail.com',
      published: new Date('2024-04-04'),
      body: 'Good Article'
    },
    {
      id: 5,
      slug: 'fifth-post',
      author: 'rahmat12345@gmail.com',
      published: new Date('2024-02-03'),
      body: 'Nah...'
    },
    {
      id: 6,
      slug: 'first-post',
      author: 'rahmat12@gmail.com',
      body: 'Good Article'
    }
  ]);
}
