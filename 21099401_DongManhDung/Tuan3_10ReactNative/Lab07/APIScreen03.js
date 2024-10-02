import react, {useState} from 'react'
import {Text, View, TouchableOpacity, StyleSheet, Image, FlatList, SafeAreaView, ScrollView, Alert} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';

const Data = [
  {
    id: 1,
    name: 'Milk',
    image: "",
    price: 20
  },
  {
    id: 2,
    name: 'Origin',
    image: require('../assets/img/Lab07/Image 5.png'),
    price: 68
  },
  {
    id: 3,
    name: 'Salt',
    image: require('../assets/img/Lab07/Image 246.png'),
    price: 5
  },
  {
    id: 4,
    name: 'Espresso',
    image: "",
    price: 9
  },
  {
    id: 5,
    name: 'Capuchino',
    image: "",
    price: 23
  },
  {
    id: 6,
    name: 'Weasel',
    image: require('../assets/img/Lab07/Image 249.png'),
    price: 20
  },
  {
    id: 7,
    name: 'Culi',
    image: "",
    price: 0
  },
  {
    id: 8,
    name: 'Catimor',
    image: require('../assets/img/Lab07/Image 226.png'),
    price: 9
  },
];


const HandleCount = ({onCountChange}) => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCountChange(newCount);
  };

  const handleDecrease = () => {
    if(count > 0){
    const newCount = count - 1;
    setCount(newCount);
    onCountChange(newCount);

    }
  };
  return (
            <View style={style.optionGroup}>
              <TouchableOpacity 
              onPress={handleDecrease}
              style={style.btn}><Image source={require('../assets/img/Lab07/Image 230.png')}></Image></TouchableOpacity>
              <View><Text>{count}</Text></View>
              <TouchableOpacity 
              onPress={handleIncrease}
              style={style.btn}><Image source={require('../assets/img/Lab07/Image 248.png')}></Image></TouchableOpacity>
            </View>
  );
};




const Item = ({item, onCountChange}) => {

  const [count, setCount] = useState(0);
  const handleCountChange = (newCount) => {
    setCount(newCount);
    onCountChange(item, newCount);
  };

    return(
        <View style={style.menuItem}>
            <View style={style.imgContainer}>
              <Image style={{width: '100%', height: '100%', objectFit: 'cover'}} source={item.image}></Image>
            </View>

            <View style={style.descriptionGroup}>
                <Text>{item.name}</Text>
                <Text style={{fontWeight: '300'}}><AntDesign name='caretright'></AntDesign> ${item.price}</Text>
            </View>

            <HandleCount onCountChange={handleCountChange}></HandleCount>
        </View>
);
};



const API_Screen03 = ({navigation}) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCountChange = (item, newCount) => {
    setSelectedItems(prevItems => {
      const updatedItems = Array.isArray(prevItems) ? prevItems.filter(i => i.id !== item.id) : [];
      if (newCount > 0) {
        updatedItems.push({ ...item, count: newCount });
      }
      return updatedItems;
    });
  };

  const handleNavigate = () => {
    if (selectedItems.length > 0) {
      navigation.navigate("APIScreen04", { selectedItems });
    } else {
      Alert.alert('Warning', 'Count must be greater than 0 to proceed.');
    }
  };


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.container}>
        <View style={style.containerFlud}>
          <FlatList
          data={Data}
          renderItem={({item}) => <Item item={item} onCountChange={handleCountChange} />}
          keyExtractor={item => item.id.toString()}>
          </FlatList>
        </View>

        <TouchableOpacity 
        style={{width: '95%', height: 40, backgroundColor: 'cyan', justifyContent: 'center', alignItems: 'center', backgroundColor: '#EFB034', marginTop: 30, borderRadius: 6}}
        onPress={handleNavigate}
        >
            <Text style={{fontSize: 18, color: '#fff', textTransform: 'uppercase'}}>Go to cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default API_Screen03;

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 900,
    backgroundColor: '#F3F4F6',
    alignItems: 'center'
  },
  containerFlud: {
    width: '95%',
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