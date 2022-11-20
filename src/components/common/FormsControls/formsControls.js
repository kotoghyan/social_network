import React from "react";
import classes from './formsControls.module.css'



export const FormControl = ({input, meta,children, ...rest}) => {
const hasError = meta.touched && meta.error
    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta,children, ...rest} = props
    return <FormControl {...props}><textarea {...input}{...rest}/></FormControl>

}

export const Input = (props) => {
    const {input, meta,children, ...rest} = props
    return <FormControl {...props}><input {...input} {...rest}/></FormControl>

}
