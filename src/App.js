import logo from './logo.svg';
import './App.css';
import AddThing from './components/add-thing';
import Things from './components/things';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Firebase demo app</h1>
        <AddThing />
        <hr />
        <Things />
      </header>
    </div>
  );
}

export default App;
