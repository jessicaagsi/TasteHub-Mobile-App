import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default function CartScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>🛒 My Cart</Text>

      {/* Item cart */}
      <View style={styles.card}>
        <Text style={styles.menu}>Sushi Roll</Text>
        <Text style={styles.price}>Rp 45.000</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.menu}>Matcha Latte</Text>
        <Text style={styles.price}>Rp 30.000</Text>
      </View>

      {/* Total */}
      <Text style={styles.total}>Total : Rp 75.000</Text>

      {/* Tombol checkout */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
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
    marginBottom: 20
  },

  card: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15
  },

  menu: {
    fontSize: 16,
    fontWeight: '600'
  },

  price: {
    color: '#ff7f50',
    marginTop: 5
  },

  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20
  },

  button: {
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 15,
    alignItems: 'center'
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});