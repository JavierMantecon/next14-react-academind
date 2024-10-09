import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  // throw new Error('Loading meals failed'); // testing error.js, error.js needs to be client component to CATCH'EM ALL
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
  console.log(slug);
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}