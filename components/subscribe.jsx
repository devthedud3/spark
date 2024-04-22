import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Icon } from "react-native-elements";
import { Btn } from "./button";

export const Subscribe = () => {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Signup to my newsletter</Text>
      <TextInput
        style={styles.input}
        placeholder="Your email address here"
        placeholderTextColor="#555"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <Btn
        name="Subscribe"
        icon={<Icon name="rss" type="feather" />}
        onPress={email}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111",
    padding: 20,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 10,
    width: "100%",
  },
  text: {
    color: "white",
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    paddingVertical: 15,
    marginVertical: 10,
    color: "white",
    backgroundColor: "#000",
    borderWidth: 1,
    borderColor: "#222",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
