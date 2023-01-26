import Head from 'next/head'
import { Inter } from '@next/font/google'
import Logout from '../components/Logout';
import SignIn from '../components/SignIn';
import { useSession } from 'next-auth/react';
import HomePage from '@/components/HomePage';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession()

  console.log(session);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container max-w-64 mx-auto my-8">
        {session && <>
          <Logout session={session} />
          <HomePage />
        </>
        }
        {!session && <SignIn />}
      </main>
    </>
  )
}
