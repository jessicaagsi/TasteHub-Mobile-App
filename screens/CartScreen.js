import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
  Alert
} from 'react-native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';

const API_URL = 'https://6a219723b1d0aaf32b4fb9b0.mockapi.io/Cart';

// Mapping imageKey (id menu) ke file gambar lokal
const imageMap = {
  '1':  require('../assets/sushiroll.webp'),
  '2':  require('../assets/tamagosushi.jpg'),
  '3':  require('../assets/RamenBowl.png'),
  '4':  require('../assets/katsucurry.jpg'),
  '5':  require('../assets/tempura.webp'),
  '6':  require('../assets/takoyaki.avif'),
  '7':  require('../assets/gyoza.jpg'),
  '8':  require('../assets/onigiri.webp'),
  '9':  require('../assets/matchalatte.avif'),
  '10': require('../assets/ochatea.jpg'),
  '11': require('../assets/mineralwater.jpg'),
  '12': require('../assets/daifukumochi.jpg'),
  '13': require('../assets/dorayaki.jpg'),
  '14': require('../assets/taiyaki.webp'),
};

export default function CartScreen() {

  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // ========================
  // GET - Ambil semua item cart
  // ========================
  const getCartItems = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setCartItems(response.data);
    } catch (error) {
      console.log('GET error:', error);
      Alert.alert('Error', 'Gagal memuat cart');
    } finally {
      setLoading(false);
    }
  };

  // ========================
  // PUT - Update quantity item
  // ========================
  const updateQuantity = async (id, currentQty, action) => {
    const newQty = action === 'increase' ? currentQty + 1 : currentQty - 1;

    if (newQty < 1) {
      deleteItem(id);
      return;
    }

    try {
      await axios.put(`${API_URL}/${id}`, { quantity: newQty });
      setCartItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity: newQty } : item
        )
      );
    } catch (error) {
      console.log('PUT error:', error);
      Alert.alert('Error', 'Gagal update quantity');
    }
  };

  // ========================
  // DELETE - Hapus item dari cart
  // ========================
  const deleteItem = async (id) => {
    Alert.alert(
      'Hapus Item',
      'Yakin mau hapus item ini dari cart?',
      [
        { text: 'Batal', style: 'cancel' },
        {
          text: 'Hapus',
          style: 'destructive',
          onPress: async () => {
            try {
              await axios.delete(`${API_URL}/${id}`);
              setCartItems(prev => prev.filter(item => item.id !== id));
            } catch (error) {
              console.log('DELETE error:', error);
              Alert.alert('Error', 'Gagal menghapus item');
            }
          }
        }
      ]
    );
  };

  // Hitung total harga
  const getTotal = () => {
    return cartItems.reduce((total, item) => {
      const priceNum = parseInt(item.price.replace(/[^0-9]/g, ''), 10);
      return total + priceNum * item.quantity;
    }, 0);
  };

  // Format angka ke Rupiah
  const formatRupiah = (num) => {
    return 'Rp ' + num.toLocaleString('id-ID');
  };

  useFocusEffect(
    React.useCallback(() => {
      getCartItems();
    }, [])
  );

  // ========================
  // RENDER item cart
  // ========================
  const renderItem = ({ item }) => (
    <View style={styles.card}>

      {/* Gambar dari imageMap berdasarkan imageKey */}
      <Image
        source={imageMap[item.imageKey]}
        style={styles.image}
      />

      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>

        {/* Quantity control */}
        <View style={styles.qtyRow}>
          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => updateQuantity(item.id, item.quantity, 'decrease')}
          >
            <Text style={styles.qtyBtnText}>−</Text>
          </TouchableOpacity>

          <Text style={styles.qtyText}>{item.quantity}</Text>

          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => updateQuantity(item.id, item.quantity, 'increase')}
          >
            <Text style={styles.qtyBtnText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tombol hapus */}
      <TouchableOpacity
        style={styles.deleteBtn}
        onPress={() => deleteItem(item.id)}
      >
        <Text style={styles.deleteBtnText}>🗑️</Text>
      </TouchableOpacity>

    </View>
  );

  return (
    <View style={styles.container}>

      <Text style={styles.title}>🛒 My Cart</Text>

      {loading ? (
        <ActivityIndicator
          size="large"
          color="#ff7f50"
          style={{ marginTop: 40 }}
        />
      ) : cartItems.length === 0 ? (
        <Text style={styles.emptyText}>Cart kamu kosong 😢</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          />

          <Text style={styles.total}>
            Total : {formatRupiah(getTotal())}
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Checkout</Text>
          </TouchableOpacity>
        </>
      )}

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
  emptyText: {
    textAlign: 'center',
    color: '#aaa',
    marginTop: 60,
    fontSize: 16
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    marginBottom: 15,
    overflow: 'hidden',
    alignItems: 'center',
    padding: 10
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 12
  },
  info: {
    flex: 1,
    paddingHorizontal: 12
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4
  },
  price: {
    color: '#ff7f50',
    fontWeight: 'bold',
    marginBottom: 8
  },
  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  qtyBtn: {
    width: 28,
    height: 28,
    backgroundColor: '#000',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  qtyBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  qtyText: {
    marginHorizontal: 12,
    fontSize: 15,
    fontWeight: '600'
  },
  deleteBtn: {
    padding: 8
  },
  deleteBtnText: {
    fontSize: 20
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
