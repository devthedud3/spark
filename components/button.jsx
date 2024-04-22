import React from "react";
import { StyleSheet, Text, View, Pressable, Linking } from "react-native";

export const Btn = ({ name, icon, link }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.textContainer,
          { opacity: pressed ? 0.2 : 1.0 },
        ]}
        onPress={() => Linking.openURL(link)}
      >
        {icon && icon}
        <Text style={styles.text}>{name}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 5,
    width: "100%",
    height: "auto",
    color: "black",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: "auto",
    width: "100%",
  },
  text: {
    color: "black",
    marginLeft: 10,
    paddingVertical: 18,
  },
});
