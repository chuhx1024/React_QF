import React from 'react'
import PropTypes from 'prop-types'

export default function TodoHeader(props) {
    return (
        <div>
            <h1>{props.children}</h1>
            <h1>{props.desc}</h1>
        </div>
    )
}

TodoHeader.propTypes = {
    desc: PropTypes.string,
    x: PropTypes.string
}


