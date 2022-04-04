import React, { useState, useContext } from "react";
import { Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import LoadButton from "../components/LoadButton";
import AppForm from "../components/AppForm";
import auth from "../api/auth";
import ErrorMessage from "../components/ErrorMessage";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import jwtDecode from "jwt-decode";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Passowrd"),
});

function LoginScreen(props) {
  const [loginError, setLoginError] = useState(true);
  const authContext = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    try {
      const response = await auth.login(email, password);
      setLoading(true);
      if (response.ok) {
        const user = jwtDecode(response.data);
        authContext.setUser(user);
        authStorage.storeData(JSON.stringify(user));
      }
    } catch (error) {
      setLoading(false);
      setLoginError("Email or Password incorrect");
      console.log(error);
    }
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../images/logo.png")} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={loginError} visible={loginError} />
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
        {loading == true ? <LoadButton /> : <SubmitButton title="Login" />}
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
