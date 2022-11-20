export const requiredField = value => {
    return value ? undefined : 'Field is required'
}


export const setMaxLength = (maxLength) => (value) => {
    if(value && value.length > maxLength ){
        return `Max Length is ${maxLength} symbols`
    }
    return  undefined
}