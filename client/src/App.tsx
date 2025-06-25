import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { PageNotFound } from '@/pages/PageNotFounds';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to the React App</h1>
      </div>
      <div className="content">
        <Routes>
          <Route path='/' element={<h2>Home Page</h2>} />
          <Route path='/about' element={<h2>About Page</h2>} />
          <Route path='/contact' element={<h2>Contact Page</h2>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
