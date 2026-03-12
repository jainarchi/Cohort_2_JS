import React from 'react'
import { useParams } from 'react-router-dom'

const Watches = () => {
   const param = useParams()
   console.log(param)


  return (
    <div>
      <h2> watches collections for {param.first}</h2>
      {param.sec && <h2>{param.sec}</h2> }
    </div>
  )
}

export default Watches
