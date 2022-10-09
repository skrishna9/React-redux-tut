import React from 'react'

export default function Home(props) {
  console.warn("props",props.data)
  console.warn("props",props)
  return (
    <div>
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
            <button onClick={()=>props.addToCartHandler({Price:2000,name: 'i phone 11'})}>Add To Cart</button>
            <button className='remove-cart-btn' onClick={()=>props.removeToCartHandler({Price:2000,name: 'i phone 11'})}>Remove To Cart</button>
        </div>
      </div>
    </div>
  )
}
