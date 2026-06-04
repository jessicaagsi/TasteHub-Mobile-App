import React from 'react';
import { ScrollView, Image, StyleSheet, Dimensions, View } from 'react-native';

// Ambil lebar layar biar full responsive
const screenWidth = Dimensions.get('window').width;

// Data gambar banner (kamu bisa tambah / ganti)
const banners = [
  require('../assets/Sushi-Header-1.png'),
//require('../assets/Sushi-Header-1.png'),
//require('../assets/Sushi-Header-1.png')
];

export default function FeaturedMenu() {
  return (
    <View style={styles.wrapper}>
      <ScrollView
        horizontal
        pagingEnabled // ⬅️ biar swipe per slide
        showsHorizontalScrollIndicator={false}
      >
        {banners.map((img, index) => (
          <Image
            key={index}
            source={img}
            style={styles.image}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 15
  },
  image: {
    width: screenWidth - 32, // ⬅️ biar sesuai padding App.js
    height: 180,
    borderRadius: 20,
    marginRight: 10
  }
});