import React from 'react'

export default function ChargesComponent({title, description}) {
  return (
    <div>
        <p >{title}</p>
        <p className='text-muted' style={{fontSize:"13px"}} >{description}</p>
    </div>
  )
}
