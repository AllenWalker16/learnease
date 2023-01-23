import {useState} from 'react'
import { navLinks } from '../constants'
import {IoMdMenu, IoMdClose} from 'react-icons/io'


const Navbar = () => {
  const [Toggle, setToggle] = useState(false)
  return (
    <nav className='w-full py-6 flex-1 flex justify-between items-center'>
      <h1 className='font-extrabold text-3xl'>AL - IRSHAD</h1>
      <ul className='list-none sm:flex hidden justify-end items-center navbar font-ral w-3/5'>
        {navLinks.map((nav,index) => (
          <li key={nav.id} className={`relative w-full flex justify-around font-ral z-20 cursor-pointer text-sm ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'} text-white`}>
            <a href={`#${nav.id}`} className='text-black font-semibold'>
              {nav.title} 
            </a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center font-ral' onClick={()=> setToggle((prev)=>!prev) }>
        {Toggle ? <IoMdClose className='w-[28px] h-[28px] object-contain mr-2'/>:<IoMdMenu className='w-[28px] h-[28px] mr-2 object-contain'/>}
      </div>
      <div className={`${Toggle ?'flex': 'hidden' } z-20 p-6 bg-primary absolute shadow-sm shadow-zinc-900 top-[50px] right-0 mx-4 my-2 min-w-[140px] rounded-none sidebar`}>
      <ul className='list-none flex flex-col justify-end items-center navbar w-full'>
        {navLinks.map((nav,index) => (
          <li key={nav.id} className={`text-black relative w-full flex justify-around font-ral z-20 cursor-pointer text-xs ${index === navLinks.length-1 ? 'mr-0' : 'mb-4'} text-white`}>
            <a href={`#${nav.id}`} className='text-black font-semibold'>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      </div>
    </nav>
  )
}

export default Navbar