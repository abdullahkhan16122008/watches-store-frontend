"use client"
import React from 'react'
import { useSelector } from 'react-redux';
import { removeCart, increaseQty, decreaseQty } from '../redux/cart/cartSlice';
import { useDispatch } from 'react-redux'
import Header from './Header';



const Checkout = () => {
    const carts = useSelector((state) => state.cart.carts);

    let [form, setForm] = React.useState({
        name: '',
        email: '',
        number: '',
        address: '',
        method: '',
    })
    let handleChange = (e) => {
        let { name, value, checked } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }
    let handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted: ', form)
        alert('Signup Successfully')
        setForm({
            name: '',
            email: '',
            number: '',
            address: '',
            method: '',
        })
    }

    return (
        <div className='justify-between text-center px-15 flex flex-wrap'>
            <div className='justify-items-center flex flex-wrap text-center'>
                <form method="post" onSubmit={handleSubmit} className='relative top-[50px] px-20 py-10' >
                    <h1 className='text-4xl text-center font-medium mb-10'>Checkout</h1>
                    <div>
                        <h2 className='my-3 text-xl'>Enter Name <span className='text-red-500'>*</span></h2>
                        <input type="text" name="name" id="" value={form.name} onChange={handleChange} className='px-3 py-1 w-[290px] border-1 ' />
                    </div>
                    <div>
                        <h2 className='my-3 text-xl'>Enter Email <span className='text-red-500'>*</span></h2>
                        <input type="email" name="email" id="" value={form.email} onChange={handleChange} className='px-3 py-1 w-[290px] border-1 ' />
                    </div>
                    <div>
                        <h2 className='my-3 text-xl'>Enter Phone Number <span className='text-red-500'>*</span></h2>
                        <input type="number" name="number" id="" value={form.number} onChange={handleChange} className='px-3 py-1 w-[290px] border-1 ' />
                    </div>
                    <div>
                        <h2 className='my-3 text-xl'>Enter Complete Address<span className='text-red-500'>*</span></h2>
                        <input type="text" name="address" id="" value={form.address} onChange={handleChange} className='px-3 py-1 w-[290px] border-1 ' />
                    </div>
                    <div className='flex flex-col my-5'>
                        <div className="inline px-2 py-1 rounded hover:border-red-400 duration-150 border-2">
                        <label className='my-3 text-xl w-full h-full px-5 text-center'>
                            <input type="radio" name="method" id="" checked={form.method === 'cash on delivery'} onChange={handleChange} value='cash on delivery' className='py-1 border-1 rounded-2xl' />
                            <span className='px-2'>💲</span> Cash on Delivery
                        </label>
                        </div>
                        <div className="inline px-2 py-1 rounded hover:border-red-400 mt-2 duration-150 border-2">
                        <label className='my-3 text-xl w-full px-5'>
                            <input type="radio" name="method" id="" checked={form.method === 'card'} onChange={handleChange} value={'card'} className='py-1 border-1 rounded-2xl' />
                            <span className='px-2'>💳</span> Card
                        </label>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <button type='submit' className='bg-black border-black text-center px-[30px] my-4 scale-[0.95] duration-300 py-[10px] border-2 text-white font-medium max-sm:scale-[0.80] hover:bg-white hover:text-black'>Submit</button>
                    </div>

                </form>
            </div>
            <div className='relative overflow-auto top-[50px] my-5 h-[600px] w-[40%] border-2 border-gray-400 hover:border-gray-700 duration-200'>
                <div className='w-full border-y'>
                    <ul className='flex justify-around'>
                        <li>Product</li>
                        <li>Price</li>
                        <li>Quantity</li>
                    </ul>
                </div>
                          {carts.map(item => (
                              <div className='py-2 border-y flex w-full justify-around items-center content-center' key={item._id}>
                                <div className="block">
                                    <img src={item.img} alt="" className='h-[100px]' />
                                    <h1 className='my-1 text-xl font-medium'>{item.title}</h1>
                                </div>
                                <div>{item.price}</div>
                                <div>{item.quantity}</div>
                            </div>
                          ))}
            <div className='font-bold text-xl w-[100%] mt-4 py-2 relative bottom-0 border-t'>
                Total Price: ${carts.reduce((acc, item) => acc + item.price * item.quantity, 0)}
            </div>
                          </div>
        </div>
    )
}

export default Checkout