import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1> This is home component</h1>
    </div>
  )
}
const About = () => {
  return (
    <div>
      <h1> This is about compomnetn</h1>
    </div>
  )
}
const Contact = () => {
  return (
    <div>
      <h1> This is contact compomnetn</h1>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
              <NavLink to="/"> Home1</NavLink>
            </li>
            <li>
              <a href="/about">About</a>
              <NavLink to="/about"> About1</NavLink>
            </li>
            <li>
              <a href="/contact">Contact</a>
              <NavLink to="/contact"> Contact1</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
