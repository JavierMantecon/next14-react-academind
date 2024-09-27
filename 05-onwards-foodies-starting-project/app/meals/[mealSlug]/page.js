import Link from 'next/link';

export default function MealDetailsPage({ params }) {
  return (
    <main>
      <h1>🔥 { params.mealSlug } 🔥</h1>
      <p><Link href="/meals">Return to meals</Link></p>
    </main>
  );
}
