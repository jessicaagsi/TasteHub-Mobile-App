import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

export default function Header({ navigation }) {
  return (

    <View style={styles.container}>

      {/* Bar atas */}
      <View style={styles.topBar}>

        {/* Logo aplikasi */}
        <Text style={styles.logo}>TasteHub.</Text>

        {/* Tombol profile */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
        >

          <Image
            source={require('../assets/profilelogo.png')}
            style={styles.profile}
          />

        </TouchableOpacity>

      </View>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Discover your favorite sushi ✨
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    marginBottom: 15
  },

  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  logo: {
    fontSize: 30,
    fontWeight: 'bold'
  },

  subtitle: {
    color: '#777',
    marginTop: 5
  },

  profile: {
    width: 45,
    height: 45,
    borderRadius: 22.5
  }

});