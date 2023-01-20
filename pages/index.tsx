import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Garden Diary</title>
        <meta name="description" content="Keep track of your garden observations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <button>Add note</button>
        <button>Add reminder</button>
        <input placeholder='search' />
        List of notes:
        <ul>
          <li>Note</li>
        </ul>
      </main>
    </>
  )
}
