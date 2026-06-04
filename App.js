import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Header from './components/Header';
import MenuList from './components/MenuList';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header />
      <MenuList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8fb',
    paddingTop: 50,
    paddingHorizontal: 16
  }
});