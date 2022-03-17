import React from "react";
import { useFormikContext } from "formik";
import AppPicker from "../components/AppPicker";
import ErrorMessage from "../components/ErrorMessage";

function AppFormPicker({ items, name, placeholder, PickerItemComponent, numberOfColumns }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
