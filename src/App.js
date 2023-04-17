import logo from './logo.svg';
import './App.css';
import GreetingList from './components/GreetingList';
import GreetingCard from './components/GreetingCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Passing Props</h1>
        <GreetingList/>
      </header>
    </div>
  );
}

export default App;
