import React, { useRef } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Animated,
  TouchableOpacity
} from 'react-native';

export default function MenuItem({
  item,
  onPress,
  navigation
}) {

  // Animated value
  const scaleAnim = useRef(
    new Animated.Value(1)
  ).current;

  // Saat ditekan
  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.96,
      useNativeDriver: true
    }).start();
  };

  // Saat dilepas
  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true
    }).start();
  };

  return (

    <TouchableWithoutFeedback
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >

      {/* Animated Card */}
      <Animated.View
        style={[
          styles.card,
          {
            transform: [{ scale: scaleAnim }]
          }
        ]}
      >

        {/* Gambar */}
        <Image
          source={item.image}
          style={styles.image}
        />

        {/* Info */}
        <View style={styles.info}>

          <Text style={styles.title}>
            {item.name}
          </Text>

          <Text style={styles.rating}>
            ⭐ 4.9
          </Text>

          <Text style={styles.price}>
            {item.price}
          </Text>

          {/* Tombol cart */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Cart')}
          >
            <Text style={styles.buttonText}>
              🛒 Add to Cart
            </Text>
          </TouchableOpacity>

        </View>

      </Animated.View>

    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 3
  },

  image: {
    width: 110,
    height: 110
  },

  info: {
    flex: 1,
    padding: 12
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },

  rating: {
    color: '#888',
    marginBottom: 5
  },

  price: {
    color: '#ff7f50',
    fontWeight: 'bold',
    marginBottom: 10
  },

  button: {
    backgroundColor: '#000',
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center'
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600'
  }

});