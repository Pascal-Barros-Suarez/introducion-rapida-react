import logo from './logo.svg';
import './App.css';
import Wellcome from './components/Wellcome';
import Contador from './components/Contador';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wellcome message="Wellcome To React" name="Pascal"/>
        <img src={logo} className="App-logo" alt="logo" />
      <Contador initialValue="665"/></header>
      
    </div>
  );
}

export default App;
