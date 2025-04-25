import { Route, Routes } from 'react-router-dom'; // import dos componentes da biblioteca de rotas 

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'; // import do componente Header
// import Home from './pages/Home'; // import do componente Home

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      </Routes>
    </div>
  );
}

export default App;