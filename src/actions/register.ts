import {defineAction} from 'astro:actions';
import {Registrars, db} from 'astro:db';
import {z} from 'astro:schema';

export const register = defineAction({
  accept: 'form',
  input: z.object({
    email: z.string(),
  }),
  async handler(input) {
    await db.insert(Registrars).values({
      email: input.email,
    });
  },
});
