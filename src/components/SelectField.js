import React from 'react'
import {ErrorMessage, Field } from 'formik'
const Select = (props) => {
    const {label, name, options, ...rest} = props
    return (
        <div className=''>
            <label htmlFor={name}>{label}</label>
            <Field as='select' id={name} name={name} {...rest} className='form-select'>
            {
                options.map(option => {
                    return (
                        <option key={option.key} value={option.value}>
                            {option.value}
                        </option>
                    )
                })
            }
            </Field>
            <ErrorMessage component='div' name={name} className='error' />
        </div>
    )
}

export default Select