import React from "react";
import { Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import AppForm from "../components/AppForm";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Passowrd"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../images/logo.png")} />

      <AppForm
        initialValues={{ email: "", password: "", name: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          placeholder="Name"
          icon="account"
          autoCorrect={false}
          name="name"
        />

        <AppFormField
          placeholder="Email"
          icon="email"
          autoCorrect={false}
          name="email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppFormField
          placeholder="Password"
          icon="lock"
          autoCorrect={false}
          name="password"
          autoCapitalize="none"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    padding: 10,
  },
});

export default LoginScreen;
