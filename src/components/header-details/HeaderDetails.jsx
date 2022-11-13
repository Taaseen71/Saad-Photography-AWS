import React, {useEffect, useState} from 'react'
import axios from 'axios'

const HeaderDetails = () => {

    const [data, setData] = useState({})

    useEffect(() => {
      runAxios()
    }, [])

    const runAxios = () => {
        axios.get('headerData.json').then(response => {
            setData(response.data)
        })
    }

    const StyleData = {
        color: 'black'
    }
    
    
  return (
    <div style={{...StyleData}}>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
    </div>
  )
}

export default HeaderDetails