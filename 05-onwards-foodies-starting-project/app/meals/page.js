import Link from 'next/link';

export default function Meals() {
  return (
    <main>
      <p>🔥 Meals 🔥</p>
      <p><Link href="/community">Community</Link></p>
      <p><Link href="/meals/potatoes">potatoes</Link></p>
      <p><Link href="/meals/tomatoes">tomatoes</Link></p>
      <p><Link href="/">Home</Link></p>
    </main>
  );
}
