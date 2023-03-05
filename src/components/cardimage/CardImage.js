import React from 'react'
import "./cardImage.css"


function cardImage({image}) {
  return (
    <div className='card-image'>
      <img src={image} alt='' />
    </div>
  )
}



export default cardImage
