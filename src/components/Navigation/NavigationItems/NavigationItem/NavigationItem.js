import React from 'react'

const NavigationItem = (props) => {
    return (
        <li>
            <a href={props.link}>{props.children}</a>
        </li>
    )
}

export default NavigationItem