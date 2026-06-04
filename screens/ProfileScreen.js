import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Foto profile */}
<Image
  source={require('../assets/profile.webp')}
  style={styles.image}
/>

      {/* Nama */}
      <Text style={styles.name}>Jessica Agnesia</Text>

      {/* Email */}
      <Text style={styles.email}>jessicaimup@email.com</Text>

      {/* Favorite */}
      <View style={styles.card}>
        <Text style={styles.label}>Favorite Food</Text>
        <Text style={styles.value}>🍣 Sushi Roll</Text>
      </View>

      {/* Tombol edit */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold'
  },

  email: {
    color: '#888',
    marginTop: 5,
    marginBottom: 30
  },

  card: {
    width: '100%',
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 20,
    marginBottom: 25
  },

  label: {
    color: '#888',
    marginBottom: 8
  },

  value: {
    fontSize: 18,
    fontWeight: '600'
  },

  button: {
    backgroundColor: '#000',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 15,
    alignItems: 'center'
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },

  profileButton: {
  width: 45,
  height: 45,
  borderRadius: 25,
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'flex-end',
  marginBottom: 10,
  elevation: 3
},

profileIcon: {
  fontSize: 20
},

});