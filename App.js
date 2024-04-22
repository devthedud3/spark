import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ScrollView,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import { Card, Profile, Subscribe } from "./components";

const LINKS = [
  {
    name: "LinkedIn",
    description: "Link to my linkedin account.",
    link: "https://linkedin.com/in/corey-cushnie",
  },
  {
    name: "Web Portfolio",
    description: "My personal web portfolio.",
    link: "https://coreycushnie.com",
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ height: "100%" }} behavior="padding">
        <View style={styles.main}>
          <Profile />
          <ScrollView style={styles.linkContainer}>
            {LINKS.map((values, index) => {
              return <Card key={index} {...values} />;
            })}
          </ScrollView>
          <Subscribe />
          <StatusBar style="auto" />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    width: "100%",
    backgroundColor: "black",
  },
  main: {
    width: "100%",
    height: "100%",
    padding: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    rowGap: 10,
    color: "black",
  },
  linkContainer: {
    width: "100%",
    flex: 1,
    display: "flex",
    rowGap: 10,
  },
});
