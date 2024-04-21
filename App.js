import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Subscribe } from './components';
import { SafeAreaView } from 'react-native-web';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text></Text>

        <Subscribe/>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'black',

    fontFamily: "Inter",
    alignItems: 'center',
    justifyContent: 'center',
  },
  main:{
    width: '100%',
    padding: 20
  }
});
