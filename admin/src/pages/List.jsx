import React, { use } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { backEndUrl } from '../App'
import { toast } from 'react-toastify'

const List = () => {

  const [list, setList] = useState([])


  const fitchList = async () => {
    try {

      const response = await axios.get(backEndUrl + '/api/product/')

      if (response.data.success) {
        setList(response.data.products)
      }
      else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)

    }
  }

  useEffect(() => {
    fitchList()
  }, [])


  return (
    <div>

    </div>
  )
}

export default List