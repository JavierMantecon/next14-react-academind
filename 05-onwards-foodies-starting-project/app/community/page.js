import Link from 'next/link';

export default function CommunityPage() {
  return (
    <main>
      <h1>🔥 Community 🔥</h1>
      <p><Link href="/meals">Meals</Link></p>
      <p><Link href="/">Home</Link></p>
    </main>
  );
}
