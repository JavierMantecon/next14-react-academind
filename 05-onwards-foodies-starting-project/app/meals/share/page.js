import Link from 'next/link';

export default function Share() {
  return (
    <main>
      <p>🔥 Share 🔥</p>
      <p><Link href="/meals">Return to meals</Link></p>
      <p><Link href="/">Home</Link></p>
    </main>
  );
}
