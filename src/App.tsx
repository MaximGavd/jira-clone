import './App.css';
import Header from './Components/common/Header/Header';
import Footer from './Components/common/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/pages/Home/Home';

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
