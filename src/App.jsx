import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Moviedetails from './pages/Moviedetails';

function App() {
  // let { userId } = useParams();
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Moviedetails />} />
    </Routes>
</BrowserRouter>
    </>
   

  )
}

export default App
