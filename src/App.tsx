import './App.css';
import Header from './Components/common/Header/Header';
import Footer from './Components/common/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/pages/Home/Home';
import Worklogs from "./Components/pages/Worklogs/Worklogs";
import UserPage from "./Components/pages/Users/UserPage";

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/worklogs/:name" element={<Worklogs />} />
        </Routes>
    </div>
  );
}

export default App;
