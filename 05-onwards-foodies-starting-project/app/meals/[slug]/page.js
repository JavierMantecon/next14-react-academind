import Link from 'next/link';

export default function MealsSlug({ params }) {
  return (
    <main>
      <p>🔥 { params.slug } 🔥</p>
      <p><Link href="/meals">Return to meals</Link></p>
    </main>
  );
}
