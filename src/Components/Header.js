import React from 'react'

export default function Header(props) {
  console.warn("props",props.data)
  return (
    <div>
        <div className='add-cart'>
          <span className='cart-count'>{props.data.length}</span>
            <img src='https://tse4.mm.bing.net/th?id=OIP.iDVurdWMV4YcAhqCEaT1bQHaHa&pid=Api&P=0'/>
        </div>
    </div>
  )
}
