import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const DetailPorTrait = ({ route }) => {
  const { item } = route.params; // Access the passed data

  return (
    <View style={styles.container}>
      <View style={styles.containerFlud}>
          <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>

      <View style={{flexDirection: 'row', width: '100%', height: 50, justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={styles.description}>Spicy tasty donut family</Text>
          <Text style={styles.price}>${item.price}</Text>
      </View>
      
      <View style={{flexDirection: 'row', width: '100%', height: 70, justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={styles.delivery}>Delivery in {'\n'} <Text style={{fontSize: 25, color: '#000'}}>30 min</Text></Text>

          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButton}>
              <Text style={styles.quantityText}>-</Text>
            </TouchableOpacity>
            <Text style={[styles.quantityText, {color: '#000'}]}>1</Text>
            <TouchableOpacity style={styles.quantityButton}>
              <Text style={styles.quantityText}>+</Text>
            </TouchableOpacity>
          </View>
      </View>

      <Text style={{fontSize: 22, fontWeight: 'bold'}}>Restaurants info</Text>
      <Text style={{fontSize: 18, height: 70, marginTop: 10}}>
      Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.</Text>



      <TouchableOpacity style={styles.addButton} onPress={() => alert('Successfully')}>
        <Text style={styles.addButtonText}>Add to cart</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 1000,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerFlud: {
    width: '95%',
    height: 1000,
  },
  image: {
    width: '100%',
    height: 350,
    objectFit: 'cover',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 25,
    color: '#000',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
    color: '#888',
    paddingLeft: 10
  },
  delivery: {
    fontSize: 16,
    marginBottom: 20,
    paddingLeft: 10,
    color: '#888',
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  quantityButton: {
    backgroundColor: '#ffd700',
    borderRadius: 5,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 25,
    marginHorizontal: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  addButton: {
    backgroundColor: '#ffd700',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
    height: 50,
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default DetailPorTrait;
