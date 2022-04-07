import React from 'react';
import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';

import { useFormikContext } from "formik"


function AppFormField({ name, ...others }) {
   const { errors, touched, setFieldTouched, setFieldValue, values } = useFormikContext()
    return (
        <>
         <AppTextInput

              onBlur={() => setFieldTouched(name)}
              onChangeText={text => setFieldValue(name, text)}
              value={values[name]}
              {...others}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormField;