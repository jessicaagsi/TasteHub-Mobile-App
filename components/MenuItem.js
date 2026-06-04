import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function MenuItem({ item }) {
  return (
    <View style={styles.card}>
<Image source={item.image} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 12,
    overflow: 'hidden',
    elevation: 2
      },
  image: {
    width: 100,
    height: 100
  },
  info: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 16,
    fontWeight: '600'
  },
  price: {
    color: '#ff7f50',
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 6,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
        fontSize: 12
  }
});