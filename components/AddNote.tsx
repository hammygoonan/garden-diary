import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import axios from 'axios';

type Props = {
  id: string
}

const placeholder = 'Add your note';

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  const formData = new FormData(e.currentTarget);
  e.preventDefault();
  try {
    const response = await axios.post('/api/notes', {
      body: formData.get('body') as string,
    })
  } catch (e: unknown) {
    if (e instanceof Error) {
      alert(e.message);
    }
  }
}

export default function AddNote({ id }: Props) {
  return (
    <div>
      <label htmlFor={id} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
      <form className='form-control' onSubmit={handleSubmit}>
        <h2 className="font-bold text-lg">Add note</h2>
        <textarea className='textarea textarea-bordered' name="body" placeholder={placeholder}>

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
