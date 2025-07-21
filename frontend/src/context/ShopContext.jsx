import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export const ShopContext = createContext()

const ShopContextProvider = (props) => {
    const currency = "$"
    const delivery_fee = 10
    const backEndUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3400'
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [cartItem, setCartItem] = useState({})
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [token, setToken] = useState('')

    const addToCart = async (itemId, size) => {
        let cartData = structuredClone(cartItem);
        if (!size) {
            toast.error("Please selecet product size")
            return
        }
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1
            }
        } else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }
        setCartItem(cartData)

        try {
            
         if(token) {
             await axios.post(backEndUrl + '/api/cart/add',{itemId,size},{headers:{token}})


         }

        } catch (error) {
            toast.error(error.message)
            console.log(error)
            
        }
    }

    const getCartCount = () => {
        let tottalCount = 0;
        for (const items in cartItem) {
            for (const item in cartItem[items]) {
                try {
                    if (cartItem[items][item] > 0) {
                        tottalCount += cartItem[items][item]
                    }

                } catch (error) {

                }
            }
        }
        return tottalCount
    }

    const getProducts = async () => {
        try {

            const response = await axios.get(backEndUrl + '/api/product/')

            if (response.data.success) {
                setProducts(response.data.products)
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }


    useEffect(() => {
        getProducts()
    }, [])


    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItem)
        cartData[itemId][size] = quantity

        setCartItem(cartData)



    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItem) {
            let itemInfo = products.find((product) => product._id === items)
            for (const item in cartItem[items]) {
                try {
                    if (cartItem[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItem[items][item]
                    }
                } catch (error) {

                }
            }
        }
        return totalAmount
    }


    useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
        setToken(storedToken);
    }
}, []);


    const value = {

        products, currency, delivery_fee, search,
        setSearch, showSearch, setShowSearch, cartItem, addToCart,setCartItem,
        getCartCount, updateQuantity, getCartAmount, navigate, backEndUrl, token, setToken

    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}

        </ShopContext.Provider>
    )

}
export default ShopContextProvider