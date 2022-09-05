import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  const [name, setName] = useState('')

  useEffect(() => {
    (
      async () => {
        const response = await fetch("http://localhost:3001/profile", {
          method: "GET",
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include'
        })
        const content = await response.json()
        setName(content.name)
      })()
  })


  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        <main className="form-signin w-100 m-auto">

          <Routes>
            <Route path='/' caseSensitive={true} element={<Home name={name} />} />
            <Route path='/login' caseSensitive={true} element={<Login />} />
            <Route path='/register' caseSensitive={true} element={<Register />} />
          </Routes>

        </main>
      </BrowserRouter>

    </div >
  );
}

export default App;
