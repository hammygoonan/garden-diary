import { signIn } from "next-auth/react"
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState('');
  return (<>
    <h3>Sign in:</h3>
    <input
      type="email"
      value={email}
      onChange={e => setEmail(e.target.value)}
      placeholder="example@gardendiary.com"
      className="input input-bordered w-full max-w-xs"
    />
    <button
      className="btn btn-primary"
      type="submit"
      onClick={() => signIn('email', { email })}
    >Sign in</button>
  </>);
};
