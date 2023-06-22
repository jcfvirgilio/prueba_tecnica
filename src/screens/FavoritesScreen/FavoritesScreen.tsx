import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {ItemFavorite} from '../../components/ItemFavorite/ItemFavorite';
import {getAllKeys} from '../../store/store';

export const FavoritesScreen = () => {
  const [data, setData] = useState<[string, string]>(['', '']);

  useEffect(() => {
    handlerGetData();
  }, []);

  const handlerGetData = async () => {
    const resultData = await getAllKeys();
    setData(resultData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Favoritos</Text>
      </View>
      <View style={styles.itemHeader}>
        <Text style={styles.itemTextTitle}>Moneda</Text>
        <Text style={styles.itemTextTitle}>Tipo de Cambio</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return <ItemFavorite title={item[0]} currency={item[1]} />;
        }}
        keyExtractor={item => item[0]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {fontSize: 25, textAlign: 'center'},
  itemContainerLasUpdated: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTextTitle: {
    fontSize: 15,
    fontWeight: '800',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 10,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
