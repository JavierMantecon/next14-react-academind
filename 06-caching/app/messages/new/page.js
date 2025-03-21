import { redirect } from 'next/navigation';

import { addMessage } from '@/lib/messages';
import {revalidatePath, revalidateTag} from "next/cache";

export default function NewMessagePage() {
  async function createMessage(formData) {
    'use server';

    const message = formData.get('message');
    addMessage(message);
    // revalidatePath('/messages');
    // revalidatePath('/messages', 'layout'); // Layout: revalidate /messages and /messages/[nested_paths]
    // revalidatePath('/', 'layout'); // Revalidate all the cache and cache route from entire site
    // revalidateTag('msg')
    redirect('/messages');
  }

  return (
    <>
      <h2>New Message</h2>
      <form action={createMessage}>
        <p className="form-control">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" required rows="5" />
        </p>

        <p className="form-actions">
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  );
}
