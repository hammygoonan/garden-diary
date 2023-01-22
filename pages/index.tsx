import Head from 'next/head'
import { Inter } from '@next/font/google'
import Login from '../components/Login';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <Login />
        <button className="btn">Add note</button>
        <button className="p-8">Add reminder</button>
        <input placeholder='search' />
        List of notes:
        <ul>
          <li>Note</li>
        </ul>
      </main>
    </>
  )
}
