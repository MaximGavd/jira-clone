import './App.css';
import Header from './Components/common/Header/Header';
import Footer from './Components/common/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/pages/Home/Home';
import Users from "./Components/pages/Users/Users";
import Worklogs from "./Components/pages/Worklogs/Worklogs";

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/worklogs/:id" element={<Worklogs />} />

        {/*  hey */}
        </Routes>
    </div>
  );
}

export default App;
