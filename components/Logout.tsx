import { Session } from "next-auth";
import { signOut } from "next-auth/react"

export default function Login({ session }: { session: Session }) {
  return <button onClick={() => signOut()}>Sign out</button>;
};
