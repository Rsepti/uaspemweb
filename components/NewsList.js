import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://localhost:5000'); // Sesuaikan dengan URL backend Anda
        setNews(response.data);
      } catch (error) {
        console.error('Failed to fetch news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daftar Berita</Text>
      <FlatList
        data={news}
        keyExtractor={(item) => item.id_berita.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.item}>{item.judul_berita}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  item: {
    fontSize: 18,
  },
});

export default NewsList;
