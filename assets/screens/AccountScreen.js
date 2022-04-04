import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Icon from "../components/Icon";
import { StatusBar } from "expo-status-bar";

import ListItems from "../components/ListItems";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";
import AuthContext from "../../assets/auth/context";
import AuthStorage from "../../assets/auth/storage";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
      size: 50,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
      size: 50,
    },
  },
];

function AccountScreen(props) {
  const { user, setUser } = useContext(AuthContext);
  const handleLogout = () => {
    setUser(null);
    AuthStorage.removeData();
  };

  return (
    <Screen style={styles.screen}>
      <StatusBar style={colors.lightgrey} />
      <View style={styles.container}>
        <ListItems
          title={user.name}
          subTitle={user.email}
          image={require("../images/avatar.png")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItems) => menuItems.title}
          renderItem={({ item, index }) => (
            <ListItems
              key={index}
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                  size={item.icon.size}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View style={styles.container}>
        <ListItems
          title="Log Out"
          IconComponent={
            <Icon name="logout" backgroundColor="#ffe66d" size={50} />
          }
          onPress={handleLogout}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    backgroundColor: colors.white,
  },
  screen: {
    backgroundColor: colors.lightgrey,
  },
});

export default AccountScreen;
