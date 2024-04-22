import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Icon } from "react-native-elements";

import { Btn } from "./button";

const profile =
  "Product/Platform Engineer with a diverse skill set encompassing Web Development, Data Processing, and Application Development. With over 5 years of hands-on experience, I excel in building software and analyzing data to drive business success. I specialize in developing models and reactive websites with a strong emphasis on UX/UI design, utilizing React and Node to deliver cutting-edge solutions. Committed to writing clean and efficient code, I strive to create user-friendly applications that meet the highest standards.";

export const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require("../assets/profile.jpeg")}
          style={styles.image}
        />

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
