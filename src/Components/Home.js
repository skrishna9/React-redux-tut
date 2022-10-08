import React from 'react'

export default function Home() {
  return (
    <div>
        <div className='add-cart'>
            <img src='https://tse4.mm.bing.net/th?id=OIP.iDVurdWMV4YcAhqCEaT1bQHaHa&pid=Api&P=0'/>
        </div>
      <h1>Home Component</h1>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
            <img src='https://tse3.mm.bing.net/th?id=OIP.vEbAx4ltTM5CLrMgWPMe3gHaO0&pid=Api&P=0' />
        </div>
        <div className='text-wrapper item'>
            <span>
                I-Phone
            </span>
            <span>
                Price: $20000.00
            </span>

        </div>
        <div className='btn-wrapper item'>
            <button>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}
