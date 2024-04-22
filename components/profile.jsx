import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Icon } from "react-native-elements";

import { Btn } from "./button.jsx";
import { profile } from "../data";

export const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={require("../assets/profile.png")} style={styles.image} />

        <View style={styles.textContainer}>
          <Text style={styles.h1}>Corey Cushnie</Text>
          <Text style={styles.p}>Software Engineer</Text>
        </View>
      </View>
      <View style={styles.hr} />
      <View>
        <Text style={styles.description}>
          {profile.length > 150 ? `${profile.slice(0, 150)}...` : profile}
        </Text>
      </View>
      <Btn
        name="Let's connect"
        icon={<Icon name="mail" type="feather" />}
        link={"mailto:corey.cushnie@gmail.com?subject=Connect!"}
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
    rowGap: 10,
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  hr: {
    width: "100%",

    borderBottomColor: "#333",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textContainer: { display: "flex" },
  h1: {
    color: "white",
    fontSize: 24,
    padding: 0,
    fontWeight: 600,
  },
  p: {
    color: "gray",
    fontSize: 18,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 100,
    marginRight: 20,
  },
  description: {
    color: "gray",
    fontSize: 12,
    paddingBottom: 10,
  },
});
