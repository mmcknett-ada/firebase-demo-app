import logo from './logo.svg';
import './App.css';
import AddThing from './components/add-thing';
import Things from './components/things';

import app from './firebase';
import { getAuth } from "firebase/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

function App() {
  const auth = getAuth(app);
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Firebase demo app</h1>
        {
          !user && <button onClick={ () => signInWithGoogle() }>Sign In</button>
        }
        {
          loading && "Signing in..."
        }
        {
          error && "Sign in error: " + JSON.stringify(error)
        }
        <>
          <AddThing />
          <hr />
          <Things />
          <hr />
          <button onClick={ () => auth.signOut() }>Sign Out</button>
        </>
      </header>
    </div>
  );
}

export default App;
