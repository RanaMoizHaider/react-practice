// import logo from './logo.svg';
import './App.css';
import Counter from './components/examples/Counter';

function App() {
  return (
    <div className="App">
      <h2>Hello Section B</h2>
      < Counter />
      < Counter theme="light"/>
      < Counter />
      < Counter theme="light"/>
    </div>
  );
}

export default App;
