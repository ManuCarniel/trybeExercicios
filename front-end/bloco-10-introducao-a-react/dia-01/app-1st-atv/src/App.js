import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const compromissos = ['Aprender React', 'Aprender HOFs', 'Aprender Jest', 'XP!!']
  return compromissos.map((element) => Task(element));
}

export default App;
