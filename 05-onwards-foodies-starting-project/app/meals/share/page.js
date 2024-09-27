import Link from 'next/link';

export default function ShareMealPage() {
  return (
    <main>
      <h1>🔥 Share 🔥</p>
      <p><Link href="/meals">Return to meals</Link></p>
      <p><Link href="/">Home</Link></p>
    </main>
  );
}
