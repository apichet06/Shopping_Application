import 'bootstrap/dist/css/bootstrap.min.css';
import './font/stylesheet.css';
import './App.css';
import { Header } from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cart } from './components/Cart';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Cart />
        <Routes>
          <Route path='/' element={<Header />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
