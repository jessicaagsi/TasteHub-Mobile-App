import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

export default function ProfileScreen({ navigation }) {

  const [profile, setProfile] = useState({
    name: 'Jessica Agnesia',
    email: 'jessicaimup@email.com',
    photoUrl: ''
  });

  return (
    <View style={styles.container}>

      {/* Foto profile */}
      <Image
        source={
          profile.photoUrl
            ? { uri: profile.photoUrl }
            : require('../assets/profile.webp')
        }
        style={styles.image}
      />

      {/* Nama */}
      <Text style={styles.name}>{profile.name}</Text>

      {/* Email */}
      <Text style={styles.email}>{profile.email}</Text>

      {/* Favorite */}
      <View style={styles.card}>
        <Text style={styles.label}>Favorite Food</Text>
        <Text style={styles.value}>🍣 Sushi Roll</Text>
      </View>

      {/* Tombol edit */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('EditProfile', {
            profile,
            onSave: (updated) => setProfile(updated)
          })
        }
      >
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
  }
});
