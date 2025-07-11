import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/home';

function App() {
  return (
    <div className='py-9 bg-white dark:bg-neutral-900'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
