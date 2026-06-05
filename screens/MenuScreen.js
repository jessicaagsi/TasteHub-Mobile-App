import React, {
  useEffect,
  useState
} from 'react';

import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';

import { supabase } from '../supabase';
export default function MenuScreen() {

  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getMenu();
  }, []);

  const getMenu = async () => {

    const { data, error } =
      await supabase
        .from('menu')
        .select('*');

    if (!error) {
      setMenu(data);
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Today's Menu
      </Text>

      <FlatList
        data={menu}
        keyExtractor={(item) =>
          item.id.toString()
        }

        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>
              {item.name}
            </Text>

            <Text>
              {item.price}
            </Text>

            <Text>
              {item.category}
            </Text>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15
  },

  card: {
    backgroundColor: '#f4f4f4',
    padding: 12,
    marginBottom: 10,
    borderRadius: 10
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold'
  }

});