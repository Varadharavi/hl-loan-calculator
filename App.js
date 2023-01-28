import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/Homepage';
import Title from './src/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
        <HomePage />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E0EDEE',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    margin: '0',
    padding: '0',
  },
});
