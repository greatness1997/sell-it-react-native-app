import React, { useState } from "react";
import { FlatList, View } from "react-native";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItems from "../components/ListItems";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "Otokina Greatness",
    description: "Hello, this car is cool, I'll like to purchase it.",
    image: require("../images/avatar.png"),
  },
  {
    id: 2,
    title: "Otokina Greatness",
    description: "Hello, I love this RR, how can i purchase it?",
    image: require("../images/avatar.png"),
  },
];

function MessageScreen(props) {
  const [messages, setMessage] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessage(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id}
        renderItem={({ item, index }) => (
          <ListItems
            key={index}
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log(item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessage([
            {
              id: 1,
              title: "T1",
              description: "D1",
              image: require("../images/avatar.png"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

export default MessageScreen;
