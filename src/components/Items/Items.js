import React from 'react'

const Items = (props) => {
    return (
        <div>
            <h2>Item: {props.item}</h2>
            <h3>Quantity: {props.qty}</h3>
            <button onClick={props.add}>More</button>
            <button onClick={props.minus}>Less</button>
        </div>
    )
}

export default Items