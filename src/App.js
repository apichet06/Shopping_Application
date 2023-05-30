import 'bootstrap/dist/css/bootstrap.min.css';
import './font/stylesheet.css';
import './App.css';
// import { Menu } from './components/Menu';
import { Header } from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Header />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
