import {NOW, column, defineDb, defineTable} from 'astro:db';

const Registrars = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    email: column.text({optional: false}),
  },
});

const Plant = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    name: column.text(),
    location: column.text(),
    imageSource: column.text(),
    frequency: column.number(),
    wateringAt: column.date({default: NOW}),
  },
});

export default defineDb({
  tables: {Registrars, Plant},
});
