import react, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


const API_Screen04 = ({ route }) => {
  const { selectedItems } = route.params;
  return(
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.container}>
        <View style={[style.orderItem, {backgroundColor: '#00BDD6'}]}>
            <View style={style.orderItemGroup}>
                <Text style={{color: '#fff', fontWeight: '600'}}>CAFE DELIVERY</Text>
                <Text style={{color: '#fff', fontWeight: '600'}}>Order #18</Text>
            </View>
            <View style={[style.orderItemGroup, {alignItems: 'flex-end'}]}>
                <Text style={{color: '#fff', fontWeight: '600'}}>$5</Text>
            </View>
        </View>

        <View style={[style.orderItem, {backgroundColor: '#8353E2'}]}>
            <View style={style.orderItemGroup}>
                <Text style={{color: '#fff', fontWeight: '600'}}>CAFE</Text>
                <Text style={{color: '#fff', fontWeight: '600'}}>Order #18</Text>
            </View>
            <View style={[style.orderItemGroup, {alignItems: 'flex-end'}]}>
                <Text style={{color: '#fff', fontWeight: '600'}}>$25</Text>
            </View>
        </View>

        {/* Component here */}
        {selectedItems.map(item => (
        <View style={style.menuItem}  key={item.id}>
            <View style={style.imgContainer}>
              <Image style={{width: '100%', height: '100%', objectFit: 'cover'}} source={item.image}></Image>
            </View>

            <View style={style.descriptionGroup}>
                <Text>{item.name}</Text>
                <Text style={{fontWeight: '300'}}><AntDesign name='caretright'></AntDesign> ${item.price}</Text>
            </View>

            <View style={style.optionGroup}>
              <TouchableOpacity 
              style={style.btn}><Image source={require('../assets/img/Lab07/Image 230.png')}></Image></TouchableOpacity>
              <View><Text>{item.count}</Text></View>
              <TouchableOpacity 
              style={style.btn}><Image source={require('../assets/img/Lab07/Image 248.png')}></Image></TouchableOpacity>
            </View>
        </View>
        ))}


        <TouchableOpacity 
        style={{width: '95%', height: 40, backgroundColor: 'cyan', justifyContent: 'center',           alignItems: 'center', backgroundColor: '#EFB034', marginTop: 30, borderRadius: 6}}>
        <Text style={{fontSize: 18, color: '#fff', textTransform: 'uppercase'}}>pay now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default API_Screen04;

const style = StyleSheet.create({
    container: {
    width: '100%',
    height: 900,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    rowGap: 5
  },
  orderItem: {
    width: '95%',
    height: 80,
    borderRadius: 6,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  orderItemGroup: {
    width: '50%',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingHorizontal: 20
  },
  menuItem: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#BCC1CA',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  imgContainer: {
    width: 50,
    height: '100%',
    objectFit: 'contain',
    backgroundColor: '#D9D9D9'
  },
  descriptionGroup: {
    width: '50%',
    height: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  optionGroup: {
    width: '33%',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btn: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    objectFit: 'cover'
  },
});