import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text style={styles.title}>Encrypted Chat Application</Text>
        <Text style={styles.subtitle}>Secure your conversations</Text>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
});

export default App;
