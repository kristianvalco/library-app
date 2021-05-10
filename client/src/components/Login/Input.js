import React from 'react'

const Input = ({name, type, handleChange, placeholder, autoFocus}) => {
    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
            autoFocus={autoFocus}
            className="form-control shadow-none"
        />
    )
}

export default Input
