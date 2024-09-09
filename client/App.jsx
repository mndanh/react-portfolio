import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components';
import { HomePage } from './pages/'
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
            
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
}
