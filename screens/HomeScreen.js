import React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../components/Header';
import MenuList from '../components/MenuList';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Header */}
      <Header navigation={navigation} />

      {/* Menu List */}
      <MenuList navigation={navigation} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8fb',
    paddingTop: 10,
    paddingHorizontal: 16
  }
});