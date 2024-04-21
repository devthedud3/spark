import React from "react";
import { StyleSheet, Pressable, Text, View, TextInput } from "react-native";
import { Btn } from "./button";

export const Subscribe = ({ name, image }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Signup to my newsletter</Text>
      <TextInput
        style={styles.input}
        placeholder="Your email address here"
        placeholderTextColor="#555"
        keyboardType="emal"
      />
      <Btn name="Subscribe" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111",
    padding: 20,
    border: "1px solid #333",
    borderRadius: 10,
    width: "100%",
  },
  text: {
    flex: 1,
    color: "white",
    fontSize: "18px",
    marginBottom: 10,
  },
  input: {
    paddingVertical: 10,
    marginVertical: 10,
    color: "white",
    backgroundColor: "#000",
    border: "1px solid #222",
    paddingHorizontal: 10,
    borderRadius: 5,
    outlineStyle: "none",
  },
});
