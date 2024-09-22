import {Plant, db} from 'astro:db';

export default async function seed() {
  await db.insert(Plant).values([
    {
      id: 1,
      name: 'Plant 1',
      location: 'Living Room',
      imageSource:
        'https://plus.unsplash.com/premium_photo-1675864663002-c330710c6ba0?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      frequency: 124125,
    },
    {
      id: 2,
      name: 'Plant 2',
      location: 'Living Room',
      imageSource:
        'https://plus.unsplash.com/premium_photo-1669688397454-bbfd12ac17ca?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

      frequency: 124125,
    },
    {
      id: 3,
      name: 'Plant 3',
      location: 'Kitchen',
      imageSource:
        'https://images.unsplash.com/photo-1502810365585-56ffa361fdde?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

      frequency: 124125,
    },
    {
      id: 4,
      name: 'Plant 4',
      location: 'Balcony',
      imageSource:
        'https://plus.unsplash.com/premium_photo-1681290358247-c160fc097bdb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

      frequency: 124125,
    },
  ]);
}
