import React from "react";
import { View, StyleSheet, Text, Pressable, Linking } from "react-native";

import { Icon } from "react-native-elements";

export const Card = ({ name, description, link }) => {
  return (
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
      onPress={() => Linking.openURL(link)}
    >
      <View style={styles.main}>
        <Icon
          name="link-2"
          type="feather"
          color="white"
          style={styles.icon}
          size={15}
        />

        <View style={styles.textContainer}>
          <Text style={styles.h1}>{name || "Title"}</Text>
          <Text style={styles.p}>{description || "Description"}</Text>
        </View>
        <Icon name="more-vertical" type="feather" color="white" size={12} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#111",
    padding: 20,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "fit-content",
    marginBottom: 10,
  },
  icon: { backgroundColor: "#333", padding: 10, borderRadius: 10 },
  textContainer: {
    paddingLeft: 10,
    display: "flex",
    justifyContent: "center",
    flex: 1,
    height: "auto",
  },
  h1: {
    flex: 1,
    color: "white",
    fontSize: 16,
    margin: 0,
    padding: 0,
    lineHeight: 16,
  },
  p: {
    fontSize: 12,
    color: "gray",
    margin: 0,
  },

  edit: {},
});
