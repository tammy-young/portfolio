import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/home';

function App() {
  return (
    <div className='bg-[#fafafa] dark:bg-neutral-900 text-neutral-600 xl:text-lg text-md'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
