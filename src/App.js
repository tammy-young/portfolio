import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/home';

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
