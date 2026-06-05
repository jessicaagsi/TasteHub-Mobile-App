import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView
} from 'react-native';

export default function EditProfileScreen({ route, navigation }) {

  const { profile, onSave } = route.params;

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [photoUrl, setPhotoUrl] = useState(profile.photoUrl || '');

  const handleSave = () => {
    if (!name.trim() || !email.trim()) {
      Alert.alert('Error', 'Nama dan email tidak boleh kosong!');
      return;
    }

    onSave({ name, email, photoUrl });
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>Edit Profile</Text>

      {/* Preview foto */}
      <View style={styles.photoContainer}>
        <Image
          source={
            photoUrl
              ? { uri: photoUrl }
              : require('../assets/profile.webp')
          }
          style={styles.photo}
        />
      </View>

      {/* Input URL foto */}
      <Text style={styles.label}>URL Foto Profile</Text>
      <TextInput
        style={styles.input}
        value={photoUrl}
        onChangeText={setPhotoUrl}
        placeholder="https://contoh.com/foto.jpg"
        autoCapitalize="none"
      />

      {/* Input nama */}
      <Text style={styles.label}>Nama</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Masukkan nama"
      />

      {/* Input email */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Masukkan email"
        autoCapitalize="none"
        keyboardType="email-address"
      />

      {/* Tombol simpan */}
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Simpan</Text>
      </TouchableOpacity>

      {/* Tombol batal */}
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.cancelText}>Batal</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    marginTop: 10
  },
  photoContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60
  },
  label: {
    color: '#888',
    marginBottom: 6,
    fontSize: 13
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 14,
    marginBottom: 18,
    fontSize: 15
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 12
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  cancelButton: {
    paddingVertical: 14,
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 30
  },
  cancelText: {
    color: '#888',
    fontWeight: '600'
  }
});
