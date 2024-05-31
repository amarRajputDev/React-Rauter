import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='w-full'>
      Userid : {userid}
    </div>
  )
}

export default User
