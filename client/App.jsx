import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header, Footer } from './components';
import { HomePage, ResumePage } from './pages/'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  return (
      <BrowserRouter>
        <Header />
        <div className="main-container">

          <div className="content-container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/ResumePage" element={<ResumePage />} />

            
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
  );
} 
