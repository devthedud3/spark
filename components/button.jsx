import React from "react";
import { StyleSheet, Pressable, Text, View } from "react-native";

export const Btn = ({ name, image }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
        onPress={() => console.log("Pressed")}
      >
        <View style={styles.text}>
          <Text>{name}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEE",
    paddingVertical: 15,
    borderRadius: 5,
    width: "100%",
  },
  text: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
