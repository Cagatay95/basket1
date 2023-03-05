import React from 'react'
import "./cardInfo.css"

function cardInfo({info}) {
  return (
    <div style={{textAlign:"center", fontSize:"20px"}}>
      {info}
    </div>
  )
}

export default cardInfo
