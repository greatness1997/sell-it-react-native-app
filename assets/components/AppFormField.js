import React from 'react';
import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';

import { useFormikContext } from "formik"


function AppFormField({ name, ...others }) {
   const { errors, handleChange, touched, setFieldTouched  } = useFormikContext()
    return (
        <>
         <AppTextInput

              onBlur={() => setFieldTouched(name)}
              onChangeText={handleChange(name)}
              {...others}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormField;