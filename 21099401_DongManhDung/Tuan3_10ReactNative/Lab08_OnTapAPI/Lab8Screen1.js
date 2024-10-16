import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native';
import react, {useState} from 'react';

const Lab8Screen1 = ({navigation}) => {
  return(
    <ScrollView showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}>
      <View style={style.container}>
      <View style={style.itemComponent}>
          <Text style={{fontSize: 22, textAlign: 'center', letterSpacing: 1}}>A premium online store for sporter and their stylish choice</Text>

      </View>

      <View style={[style.itemComponent, {height: 300}]}>
          <Image style={{objectFit: 'contain'}} source={require('../assets/img/Lab08_OnTapAPI/bifour_-removebg-preview.png')}></Image>
      </View>

       <View style={[style.itemComponent]}>
          <Text style={{width: '50%',fontSize: 25, textAlign: 'center', fontWeight: 'bold'}}>POWER BIKE SHOP</Text>
      </View>

      <View style={[style.itemComponent]}>
          <TouchableOpacity
          onPress={() => navigation.navigate('Lab8Screen2')}
          style={style.button}
          ><Text style={{fontSize: 20, color: '#fff'}}>Get Started</Text></TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
}

export default Lab8Screen1

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 1000,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  itemComponent: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },
  button: {
    width: '90%', 
    height: 50, 
    backgroundColor: '#E94141', 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 30
  },
});