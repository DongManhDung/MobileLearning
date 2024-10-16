import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, FlatList} from 'react-native';
import react, {useState} from 'react';


const Lab8Screen3 = ({ route }) => {

  const { item } = route.params;

  return(
    <View style={style.container}>
        <View style={[style.itemComponent, {height: 300}]}>
            <Image 
            style={{width: '75%', height: '85%', objectFit: 'cover'}}
            source={item.image}/>
        </View>

        <View style={[style.itemComponent, {height: 50, alignItems: 'flex-start'}]}>
            <Text style={{fontSize: 22, letterSpacing: 0.5}}>Pina Mountain</Text>
        </View>

        <View style={[style.itemComponent, {height: 50,  flexDirection: 'row',
        }]}>
            <Text style={{fontSize: 22, letterSpacing: 0.5, color: '#888', width: '50%'}}>15% OFF I <Text>
            {item.price}</Text></Text>
            <Text style={{fontSize: 22, letterSpacing: 0.5, textDecorationLine: 'line-through'}}>{item.originalPrice}</Text>
        </View>

        <View style={[style.itemComponent, {height: 50, alignItems: 'flex-start'}]}>
            <Text style={{fontSize: 19, letterSpacing: 0.5}}>Description</Text>
        </View>

        <View style={[style.itemComponent, {height: 100, alignItems: 'flex-start'}]}>
            <Text style={{fontSize: 17, letterSpacing: 0.5, textAlign: 'justify'}}>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text>
        </View>

        <View style={[style.itemComponent, {height: 50, alignItems: 'center'}]}>
          <TouchableOpacity style={style.btn}
          onPress={() => alert("Added successfully!")}
          >
            <Text style={{fontSize: 19, letterSpacing: 0.5, color: '#fff'}}>Add to card</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}





export default Lab8Screen3

const style= StyleSheet.create({
  btn: {
    width: '70%',
    padding: 10,
    height: 50,
    borderWidth:1,
    borderColor: '#E94141',
    backgroundColor: '#E94141',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30
  },
  container: {
    width: '100%',
    height: 1000,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  itemComponent: {
    width: '95%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },
});