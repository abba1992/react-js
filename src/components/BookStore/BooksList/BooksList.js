import React from 'react'

const BooksList = (props) => {
    return (
        <div>
            <h2>Title: {props.title}</h2>
            <h4>By {props.author}</h4>
            <input type='text' onChange={props.change} />
            <button onClick={props.remove}>Remove</button>
        </div>
    )
}

export default BooksList