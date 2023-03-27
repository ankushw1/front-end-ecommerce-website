import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from './components/Home'
import About from './components/About'
import Store from './components/Store'
import Cart from "./components/Cart";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route path="/about" Component={About}/>
        <Route path="/store" Component={Store}/>
        <Route path="/cart" Component={Cart}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
