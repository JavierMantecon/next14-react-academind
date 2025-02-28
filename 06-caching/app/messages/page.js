// import { unstable_noStore } from "next/cache";
import Messages from '@/components/messages';

// export const revalidate = 5; // same as next.revalidate
// export const dynamic = 'force-dynamic'; // equal to cache: 'no-store'
// export const dynamic = 'force-static'; // it's never revalidated


export default async function MessagesPage() {
  // unstable_noStore(); // equal to cache: 'no-store'
  const response = await fetch('http://localhost:8080/messages', {
    // next: {
    //   revalidate: 5 //seconds
    // },
    // cache: 'no-store', // 'force-cache'
    // headers: {
    //   'X-ID': 'page',
    // },
    tags: ['msg'] // sets a tag for the cache
  });
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
