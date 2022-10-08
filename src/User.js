import React from 'react'

const User=(props)=>{
    // console.warn(props)
    const {data} =props
    return(
       
        <div>
            <h1>User Component  {props.data.name}</h1>
            <h4>{data.age}</h4>
        </div>
    )
}

export default User;