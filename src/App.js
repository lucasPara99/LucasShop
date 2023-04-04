import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import ItemList from './components/ItemList/ItemList';
import Counter from './components/Counter/Counter';



function App() {

let saludo = "hola juancito como estas?"
let edad = 25


  return (
    <div className="App">
      <Navbar />
      <ItemList saludo={saludo} edad={edad} />
     <Counter />
    
      
     
    </div>
  );
}

export default App;
