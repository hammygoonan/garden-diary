import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import axios from 'axios';
import { PostData } from '@/types';

type Props = {
  id: string,
  data?: PostData,
}

const placeholder = 'Add your note';

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  const formData = new FormData(e.currentTarget);
  const postId = formData.get('id');
  e.preventDefault();
  const url = postId ? `/api/notes/${postId}` : '/api/notes';
  try {
    const response = await axios.post(url, {
      body: formData.get('body') as string,
      id: postId ? postId : undefined,
    })
  } catch (e: unknown) {
    if (e instanceof Error) {
      alert(e.message);
    }
  }
}

export default function NoteForm({ id, data }: Props) {
  const title = data ? 'Edit note' : 'Add note';
  const [body, setBody] = useState(data?.body);

  return (
    <div>
      <label htmlFor={id} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
      <form className='form-control' onSubmit={handleSubmit}>
        <h2 className="font-bold text-lg">{title}</h2>
        {data && <input type="hidden" name='id' value={data.id} />}
        <textarea className='textarea textarea-bordered' value={body} onChange={(e) => setBody(e.target.value)} name="body" placeholder={placeholder}>

        </textarea>
        <Link
          href="https://www.markdownguide.org/cheat-sheet/"
          title="You can use Markdown in your notes. Click this link to find out more."
          className='my-3'
        >
          <Image src="/md.svg" className='float-right w-6' alt="Markdown Logo" width="208" height="128"></Image>
        </Link>

        <button className='btn' type="submit">Submit</button>
      </form>
    </div>
  )
}
