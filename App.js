import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { CENTER, TEXT} from './src/style';
import Home1 from './src/Home1';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>MORTGAGE CALCULATOR</Text>
        </View>
        <Home1 />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d2236',
    paddingTop: Constants.statusBarHeight,
  },
  content: {
    flex: 1,
  },
  header: {
    ...CENTER,
    height: 70,
    marginBottom: 15,
    borderBottomWidth: 5,
    borderBottomColor: '#16192e',
  },
  headerText: {
    ...TEXT,
    fontSize: 24,
    fontWeight: '500',
  },
});
