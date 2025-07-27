import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "$";
    const delivery_fee = 10;
    const backEndUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3400';

    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItem, setCartItem] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');
    const [userId, setUserId] = useState('');
    const navigate = useNavigate();

    // ✅ Add to cart
    const addToCart = async (itemId, size) => {
        let cartData = structuredClone(cartItem);

        if (!size) {
            toast.error("Please select product size");
            return;
        }

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = { [size]: 1 };
        }

        setCartItem(cartData);

        try {
            if (token && userId) {
                await axios.post(`${backEndUrl}/api/cart/add`, 
                    { itemId, size, userId }, 
                    { headers: { token } }
                );
            }
        } catch (error) {
            toast.error(error.message);
            console.log(error);
        }
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItem) {
            for (const size in cartItem[items]) {
                try {
                    if (cartItem[items][size] > 0) {
                        totalCount += cartItem[items][size];
                    }
                } catch (error) {}
            }
        }
        return totalCount;
    };

    const getProducts = async () => {
        try {
            const response = await axios.get(`${backEndUrl}/api/product/`);
            if (response.data.success) {
                setProducts(response.data.products);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    // ✅ Update quantity
    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItem);
        cartData[itemId][size] = quantity;
        setCartItem(cartData);

        try {
            if (token && userId) {
                await axios.post(`${backEndUrl}/api/cart/update`, 
                    { itemId, size, quantity, userId }, 
                    { headers: { token } }
                );
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItem) {
            let itemInfo = products.find((product) => product._id === items);
            for (const size in cartItem[items]) {
                try {
                    if (cartItem[items][size] > 0 && itemInfo) {
                        totalAmount += itemInfo.price * cartItem[items][size];
                    }
                } catch (error) {}
            }
        }
        return totalAmount;
    };

    // ✅ Get user's cart
    const getUserCart = async (userToken, userId) => {
        try {
            const response = await axios.post(`${backEndUrl}/api/cart/get`, 
                { userId }, 
                { headers: { token: userToken } }
            );
            if (response.data.success) {
                setCartItem(response.data.cartData);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.message);
            console.log(error);
        }
    };

    // ✅ Initial setup
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedUserId = localStorage.getItem('userId');
        if (storedToken) setToken(storedToken);
        if (storedUserId) setUserId(storedUserId);

        if (storedToken && storedUserId) {
            getUserCart(storedToken, storedUserId);
        }

        getProducts();
    }, []);

    const value = {
        products, currency, delivery_fee, search,
        setSearch, showSearch, setShowSearch, cartItem, addToCart,
        setCartItem, getCartCount, updateQuantity, getCartAmount,
        navigate, backEndUrl, token, setToken, userId, setUserId
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
