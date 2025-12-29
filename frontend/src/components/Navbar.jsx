import { Moon, Plus, Search, Sun } from 'lucide-react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { toggleTheme, setToggleTheme} = useContext(ThemeContext)
    const handleClick = () => {
        setToggleTheme(!toggleTheme)
    }
  return (
    <div className={`w-full z-100 flex justify-between items-center px-10 py-5 fixed ${toggleTheme ? 'bg-white text-black shadow-md' : 'bg-black text-white shadow-[0_0_10px_rgba(255,255,255,0.7)]'} `}>
       <Link to='/' className='text-2xl font-bold'>Gallery</Link>
       <div className='flex gap-5 items-center'>
        <div className='flex items-center'>
            <input type="search" name="search" id="search" placeholder='Search...' className='border rounded-l-2xl px-2 py-2 w-64 outline-0'/>
            <button className='border px-5 py-2 rounded-r-2xl'><Search /></button>
        </div>
        <Link to='/create' className='flex gap-3 px-5 py-2 rounded bg-green-400 cursor-pointer'><Plus /> Create</Link>
        <button onClick={handleClick}>{toggleTheme ? <Moon /> : <Sun />}</button>
       </div>
    </div>
  )
}

export default Navbar
