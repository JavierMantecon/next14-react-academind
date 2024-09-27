import Link from 'next/link';

export default function MealsPage() {
  return (
    <main>
      <h1>🔥 Meals 🔥</h1>
      <p><Link href="/community">Community</Link></p>
      <p><Link href="/meals/potatoes">potatoes</Link></p>
      <p><Link href="/meals/tomatoes">tomatoes</Link></p>
      <p><Link href="/">Home</Link></p>
    </main>
  );
}
