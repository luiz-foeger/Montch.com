import { Route, Routes } from 'react-router-dom'; // import dos componentes da biblioteca de rotas 

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import Home from './pages/Home';

// import Home from './pages/Home'; // import do componente Home

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;