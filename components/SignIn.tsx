import { signIn } from "next-auth/react"
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState('');
  const [disabled, setDisabled] = useState(false);
  return (<form onSubmit={(e) => {
    e.preventDefault();
    setDisabled(true);
    signIn('email', { email });
  }}>
    {disabled && <div className="toast">
      <div className="alert alert-info">
        <div>
          <span>Signing you in...</span>
        </div>
      </div>
    </div>}
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
      disabled={disabled}
    >Sign in</button>
  </form>);
};
