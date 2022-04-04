import React, { useState, useContext } from "react";
import { Image, StyleSheet, ActivityIndicator } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import LoadButton from "../components/LoadButton";
import AppForm from "../components/AppForm";
import ErrorMessage from "../components/ErrorMessage";
import auth from "../api/auth";
import colors from "../config/colors";
import jwtDecode from "jwt-decode";

import AuthContext from "../auth/context";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Passowrd"),
});

function RegisterScreen() {
  const [regError, setRegError] = useState(false);
  const authContext = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (userInfo) => {
    const result = await auth.register(userInfo);

    if (!result.ok) {
      if (result.data) setRegError(result.data.error);
      else {
        setRegError("An unexpcted error has occour");
      }
      return;
    }

    const { data: authToken } = await auth.login(
      userInfo.email,
      userInfo.password
    );
    const user = jwtDecode(authToken);
    authContext.setUser(user)
    authStorage.storeData(JSON.stringify(user));
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../images/logo.png")} />
      <ErrorMessage error={regError} visible={regError} />
      <AppForm
        initialValues={{ email: "", password: "", name: "" }}
        onSubmit={handleRegister}
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

        {loading == true ? <LoadButton /> : <SubmitButton title="Submit" />}
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

export default RegisterScreen;
