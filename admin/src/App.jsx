
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Login from './components/Login'
  import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const backEndUrl = import.meta.env.VITE_BACKEND_URL

const App = () => {

  const   [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : "");

  useEffect(() => {
     localStorage.setItem('token',token);
   
  }, [token])
  return (

    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer/>

      {token === ""
        ? <Login setToken={setToken} />
        :

        <>
          <Navbar />
          <hr />
          <div className='flex w-full'>
            <Sidebar />
            <div className='w-[70%] mx-auto ml-[max(5vw,25px)] text-gray-600 text-base'>
              <Routes>
                <Route path='/add' element={<Add />} />
                <Route path='/list' element={<List />} />
                <Route path='/orders' element={<Orders />} />
              </Routes>
            </div>
          </div>
        </>
      }

    </div>

  )

}

export default App