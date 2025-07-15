import React, { use } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const List = () => {

const [list,setList] = useState([])


const fitchList = async () => {
  try {

    const response = await axios.get(backendUrl + '/api/product/list')

    console.log(response)
    
  } catch (error) {
    
  }
}

useEffect(()=>{
  fitchList()
},[])


  return (
    <div>
        
    </div>
  )
}

export default List