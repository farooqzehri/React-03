import React from 'react'
function Card({title , thumbnail , price , showMore}) {
  return (
    <div>
        <img src={thumbnail} alt={title} />

        <h2>{title}</h2>
        <h4>{price}</h4>
        <button onClick={showMore}>
            show more..
        </button>
    </div>
    
  )
}

export default Card