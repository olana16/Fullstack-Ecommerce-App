import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";


export const ShopContext = createContext()

const ShopContextProvider =(props)=>{
    const currency ="$"
    const delivery_fee= 10
    const[search,setSearch] =useState('')
    const[showSearch,setShowSearch]= useState(false)
    const[cartItem,setCartItem] = useState({})

    const addToCart = async (itemId,size) =>{
        let cartData= structuredClone(cartItem);
        if(!size){
            toast.error("Please selecet product size")
            return
        }
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size]+=1;
            }else{
                cartData[itemId][size]=1
            }
        }else{
            cartData[itemId]={}
            cartData[itemId][size]=1
        }
        setCartItem(cartData)
    }

    const getCartCount =()=>{
        let tottalCount = 0;
        for(const items in cartItem){
            for(const item in cartItem[items]){
                try {
                    if(cartItem[items][item] > 0){
                        tottalCount +=cartItem[items][item]
                    }
                    
                } catch (error) {
                    
                }
            }
        }
        return tottalCount
    }

    const value= {

        products, currency,delivery_fee,search,
        setSearch,showSearch,setShowSearch,cartItem,addToCart,getCartCount

    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}

        </ShopContext.Provider>
    )

}
export default ShopContextProvider