import React from 'react'

export default function TodoHeader(props) {
    return (
        <div>
            <h1>{props.children}</h1>
            <h1>{props.desc}</h1>
        </div>
    )
}


