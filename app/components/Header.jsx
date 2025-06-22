'use client'
import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { ImCross } from 'react-icons/im'
import { FaShoppingCart, FaBars } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { useSelector } from 'react-redux';
import { removeCart, increaseQty, decreaseQty } from '../redux/cart/cartSlice';
import { useDispatch } from 'react-redux'

const Header = () => {
  const carts = useSelector((state) => state.cart.carts);
  const dispatch = useDispatch()
  const myRef = useRef()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = () => {
    myRef.current.style.right = '0%'
  }

  const handleCrossClick = () => {
    myRef.current.style.right = '-100%'
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className='flex items-center justify-between px-5 py-5 sticky top-0 bg-white shadow-md z-[999]'>
      
      {/* Left: Logo */}
      <div className='text-2xl font-serif font-bold'>.__AK Store__.</div>

      {/* Hamburger (Mobile Only) */}
      <button className='md:hidden text-2xl' onClick={toggleMenu}>
        <FaBars />
      </button>

      {/* Middle + Right Nav (Desktop) */}
      <nav className='hidden md:flex items-center gap-10'>
        <ul className='flex gap-8 text-sm font-bold'>
          <li><Link href="/" className='hover:text-red-500'>Home</Link></li>
          <li><Link href="/products" className='hover:text-red-500'>All Products</Link></li>
          {/* <li><Link href="#" className='hover:text-red-500'>Blog</Link></li> */}
          <li><Link href="/contact" className='hover:text-red-500'>Contact</Link></li>
          <li><Link href="/login" className='hover:text-red-500'>Login</Link></li>
        </ul>
        <ul className='flex items-center gap-6 ml-10'>
          <li><Link href="#" className='text-xl'><CgProfile /></Link></li>
          <li onClick={handleClick}><Link href="#" className='text-xl flex items-center'><FaShoppingCart />&nbsp;{carts.length}</Link></li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='absolute top-[70px] duration-300 left-0 w-full bg-white border-t md:hidden shadow-lg z-50'>
          <ul className='flex flex-col gap-4 p-5 text-sm font-bold'>
            <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="/products" onClick={toggleMenu}>All Products</Link></li>
            {/* <li><Link href="#" onClick={toggleMenu}>Blog</Link></li> */}
            <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
            <li><Link href="/login" onClick={toggleMenu}>Login</Link></li>
            <li><Link href="#" className='flex items-center gap-2'><CgProfile /> Profile</Link></li>
            <li onClick={() => { toggleMenu(); handleClick(); }} className='flex items-center gap-2 cursor-pointer'>
              <FaShoppingCart /> Cart ({carts.length})
            </li>
          </ul>
        </div>
      )}

      {/* Cart Side Panel */}
      <div ref={myRef} className='cart w-[550px] max-sm:w-full bg-white shadow-2xl duration-300 fixed top-0 right-[-100%] z-[1000] h-[100vh] overflow-auto'>
        <button className='absolute top-5 left-5 scale-[1.5]' onClick={handleCrossClick}><ImCross /></button>
        <div className='relative top-[100px] px-[20px]'>
          <h1>Cart Items: {carts.length}</h1>
          <table className='text-center border-t w-full'>
            <thead>
              <tr>
                <th className='px-4'>Products</th>
                <th className='px-4'>Price</th>
                <th className='px-4'>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {carts.map(item => (
                <tr key={item._id} className="border-y">
                  <td className='py-4 flex items-center gap-2'>
                    <img src={item.img} alt="" className='h-[60px] w-[60px] object-cover' />
                    <span className='text-sm font-semibold'>{item.title}</span>
                  </td>
                  <td>${item.price}</td>
                  <td className='flex items-center justify-center gap-2'>
                    <button onClick={() => dispatch(decreaseQty(item._id))} className='border px-2'>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(increaseQty(item._id))} className='border px-2'>+</button>
                  </td>
                  <td>
                    <button onClick={() => dispatch(removeCart(item._id))} className='text-red-500 underline text-sm'>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='text-right mt-4 font-bold'>
            Total: ${carts.reduce((acc, item) => acc + item.price * item.quantity, 0)}
          </div>
          <Link href={'/checkout'}>
            <button className='bg-black border-black px-[30px] my-4 duration-300 py-[10px] border-2 text-white font-medium max-sm:scale-[0.80] hover:bg-white hover:text-black'>Checkout</button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
