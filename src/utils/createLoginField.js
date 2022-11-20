import {Field} from "redux-form";
import React from "react";

export const createLoginField = (placeholder, name, component, validate, type = {}, text = '') => (
    <div>
        <Field placeholder={placeholder}
               name={name} component={component}
               validate={validate} {...type}/>{text}
    </div>
)