import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
    const [visible, setVisible] = useState(false)
<<<<<<< HEAD
    const { setShowSearch, getCartCount,token,setToken,navigate,setCartItem } = useContext(ShopContext)
const logout = ()=>{
    navigate('/login')
    setToken('')
    setCartItem({})
    localStorage.removeItem('token')
}
=======
    const { setShowSearch, getCartCount, token, setToken, navigate, setCartItem } = useContext(ShopContext)

    const logout = () => {
        localStorage.removeItem('token')
        setToken('')
        setCartItem({})
        navigate('/login')

    }
>>>>>>> 272581c43655ffb8da88c56dd1b7deb9dcb93d71


    return (
        <div className='flex justify-between items-center py-5 font-medium'>

            <Link to='/'><img src={assets.logo} alt="" className='w-36' /></Link>

            <ul className='hidden sm:flex gap-5  text-sm text-gray-500'>
                <NavLink to='/' className='flex flex-col items-center gap-1 '>
                    <p>HOME</p>
                    <hr className='w-2/5 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>COLLECTION</p>
                    <hr className='w-2/5 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                    <hr className='w-2/5 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>CONTACT</p>
                    <hr className='w-2/5 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                <img onClick={() => setShowSearch(true)} src={assets.search_icon} alt="search icon" className='w-5 cursor-pointer' />
                <div className='group relative'>
                    <Link to={"login"}> <img src={assets.profile_icon} alt="cart" className='w-5 cursor-pointer' /> </Link>
                    <div className='group-hover:block hidden absolute dropdowm-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p className='cursor-pointer hover:text-black'>My Profie</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>

                        </div>

                    </div>

                </div>
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} alt="" className='w-5 min-w-5' />
                    <p className='absolute right-[-5px] bottom-[-5px] text-center w-4 leading-4 bg-black text-white
                aspect-square rounded-full text-[8px]'>{getCartCount()}</p>

                </Link>
                <img onClick={() => setVisible(true)} src={assets.menu_icon} alt="" className='w-5 cursor-pointer sm:hidden' />

            </div>

            {/* side bar menu for small screen */}
            <div className={`absolute top-0 bottom-0 right-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div className='flex cursor-pointer
                    gap-4 p-3' onClick={() => setVisible(false)}>
                        <img src={assets.dropdown_icon} alt="" className='h-4 rotate-180' />
                        <p>back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} to='/' className='py-2 pl-6 border'> Home</NavLink>
                    <NavLink onClick={() => setVisible(false)} to='/collection' className='py-2 pl-6 border'> COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} to='/about' className='py-2 pl-6 border'> ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} to='/contact' className='py-2 pl-6 border'> CONTACT</NavLink>
                </div>
            </div>

        </div>
    )
}

export default Navbar