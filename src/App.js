import logo from './logo.svg';
import './App.css';
import AddThing from './components/add-thing';
import Things from './components/things';

import { app } from './firebase';
import { getAuth } from 'firebase/auth';
import { useSignInWithGoogle, useSignOut } from 'react-firebase-hooks/auth';


function App() {
  const auth = getAuth(app);
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signOut] = useSignOut(auth);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Firebase demo app</h1>
        { !user && <button onClick={ () => signInWithGoogle() }>Sign In!</button>}
        { user && <button onClick={ () => signOut() }>Sign Out</button>}
        { user && <AddThing /> }
        <hr />
        <Things />
      </header>
    </div>
  );
}

export default App;
