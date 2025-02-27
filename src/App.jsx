import React from 'react'
import './App.css'
import Logo from './component/Logo'
import Header from './component/Header'
function App() {
  const navItems = [
    {
      name: 'Home',
      slug: "/"
    },
    {
      name: "About Us",
      slug: "/about"
    },
    {
      name: "Contact Us",
      slug: "/contact"
    }
  ]
  return (
    <>
      <nav className='flex bg-gray-100 w-full p-4'>
        <div>
          <Logo/>
        </div>
        <ul className='flex ml-auto'>
          {navItems.map((item) =>(
            <li key={item.name} className='mx-3'>
                <button
                  className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
            </li>))}
        </ul>
      </nav>
    </>
  )
}

export default App
