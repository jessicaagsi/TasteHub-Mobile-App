import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

export default function ReservationScreen() {

  // State form
  const [name, setName] = useState('');
  const [people, setPeople] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // Submit form
  const handleReserve = () => {
    Alert.alert(
      'Reservation Success',
      `${name}, your table has been booked!`
    );
  };

  return (

    <View style={styles.container}>

      {/* Judul */}
      <Text style={styles.title}>
        🍽️ Table Reservation
      </Text>

      {/* Nama */}
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />

      {/* Jumlah orang */}
      <TextInput
        style={styles.input}
        placeholder="Number of People"
        value={people}
        onChangeText={setPeople}
        keyboardType="numeric"
      />

      {/* Tanggal */}
      <TextInput
        style={styles.input}
        placeholder="Reservation Date"
        value={date}
        onChangeText={setDate}
      />

      {/* Jam */}
      <TextInput
        style={styles.input}
        placeholder="Reservation Time"
        value={time}
        onChangeText={setTime}
      />

      {/* Tombol submit */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleReserve}
      >
        <Text style={styles.buttonText}>
          Reserve Now
        </Text>
      </TouchableOpacity>

    </View>
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
    marginBottom: 25
  },

  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15
  },

  button: {
    backgroundColor: '#ff7f50',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center'
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }

});