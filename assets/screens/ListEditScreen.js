import React from "react";
import AppForm from "../components/AppForm";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import Screen from "../components/Screen";
import AppFormPicker from "../components/AppFormPicker";
import { StyleSheet } from "react-native";

import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/FormImagePicker";

import * as Yup from "yup";
//import { useLocation } from '../hooks/useLocation'

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.string().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select atleaset 1 image."),
});

const categories = [
  { label: "Vehicles", value: 1, backgroundColor: "orange", icon: "car" },
  {
    label: "Clothing",
    value: 2,
    backgroundColor: "green",
    icon: "shoe-formal",
  },
  {
    label: "Furniture",
    value: 3,
    backgroundColor: "royalblue",
    icon: "table-furniture",
  },
  {
    label: "Mobile Phones",
    value: 4,
    backgroundColor: "indigo",
    icon: "cellphone-iphone",
  },
  {
    label: "Electronics",
    value: 5,
    backgroundColor: "purple",
    icon: "television",
  },
  { label: "Sports", value: 6, backgroundColor: "gold", icon: "football" },
  {
    label: "Properties",
    value: 7,
    backgroundColor: "brown",
    icon: "warehouse",
  },
  {
    label: "Agriculture & Food",
    value: 8,
    backgroundColor: "red",
    icon: "food",
  },
  { label: "Others", value: 9, backgroundColor: "grey", icon: "menu" },
];

function ListEditScreen(props) {
  //const location = useLocation();

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={225} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />
        <AppFormPicker
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          items={categories}
          name="category"
          placeholder="Category"
        />
        <AppFormField
          maxLength={225}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListEditScreen;
