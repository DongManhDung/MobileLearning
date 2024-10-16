import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, FlatList} from 'react-native';
import react, {useState} from 'react';

const DATA = [
  {
    id: 1,
    name: 'Pinarello',
    image: require('../assets/img/Lab08_OnTapAPI/bifour_-removebg-preview.png'),
    price: '$ 1000',
    originalPrice: '$ 1500',
    category: ['All','Mountain'],
  },
  {
    id: 2,
    name: 'Pina Mountain',
    category: ['All','Mountain'],
    image: require('../assets/img/Lab08_OnTapAPI/bione-removebg-preview.png'),
    price: '$ 1700',
    originalPrice: '$ 2000'
  },
  {
    id: 3,
    name: 'Pina Bike',
    image: require('../assets/img/Lab08_OnTapAPI/bithree_removebg-preview.png'),
    price: '$ 1500',
    originalPrice: '$ 2000',
    category: ['All','Roadbike'],
  },
  {
    id: 4,
    name: 'Pinarello',
    image: require('../assets/img/Lab08_OnTapAPI/bitwo-removebg-preview.png'),
    price: '$ 1900',
    originalPrice: '$ 2500',
    category: ['All','Roadbike'],
  },
  {
    id: 5,
    name: 'Pinarello',
    image: require('../assets/img/Lab08_OnTapAPI/bithree_removebg-preview.png'),
    price: '$ 2700',
    originalPrice: '$ 3000',
    category: ['All','Roadbike'],
  },
  {
    id: 6,
    name: 'Pina Bike',
    image: require('../assets/img/Lab08_OnTapAPI/bione-removebg-preview.png'),
    price: '$ 1350',
    originalPrice: '$ 2000',
    category: ['All','Mountain'],
  },
];


const Item = ({item, navigation}) => {
  return(
      <TouchableOpacity style={style.itemFlud}
      onPress={() => navigation.navigate('Lab8Screen3', {item})}
      >
                <Image
                style={style.image}
                 source={item.image}></Image>
                 <Text>{item.name}</Text>
                  <Text>{item.price}</Text>
      </TouchableOpacity>
  );
}

const Lab8Screen2 = ({navigation}) => {

  const categories = ['All', 'Roadbike', 'Mountain'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredData = (selectedCategory === 'All' ? DATA : DATA.filter(item => item.category.includes(selectedCategory)));


  return (
      <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      >
          <View style={style.container}>
        <View style={[style.itemComponent, {height: 50}]}>
          <Text style={{fontSize: 20}}>The world’s Best Bike</Text>
        </View>

        <View style={[style.itemComponent, {height: 50, flexDirection: 'row', columnGap: 10, justifyContent: 'space-between', alignItems: 'center'}]}>
          {categories.map((category) => (
            <TouchableOpacity
            key={category}
            style={[
              style.btn,
              selectedCategory === category && style.selectedCategory]}
              onPress={() => setSelectedCategory(category)}
            ><Text>{category}</Text></TouchableOpacity>
            ))}
        </View>

        <View style={[style.itemComponent, {height: 660, justifyContent: 'flex-start',
        paddingHorizontal: 10, }]}>
            <View style={{width: '100%'}}>
                    <FlatList
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                  data={filteredData}
                  renderItem={({item}) => <Item item={item} navigation={navigation}></Item>}
                  numColumns={2}
                  keyExtractor={item => item.id}
                  contentContainerStyle={{ rowGap: 20}}
                  columnWrapperStyle={{gap: 15}}
                  ></FlatList>
            </View>
        </View>
      </View>
      </ScrollView>
  );
}

export default Lab8Screen2;


const style= StyleSheet.create({
  selectedCategory: {
    backgroundColor: '#E94141',
  },
  image: {
    width: '80%',
    height: '70%',
    objectFit: 'contain',
    marginTop: 5
  },
  btn: {
    width: '25%',
    padding: 10,
    height: 40,
    borderWidth:1,
    borderColor: '#E94141',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
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
    alignItems: 'flex-start',
    marginTop: 5
  },
  itemFlud: {
    width: '47%',
    height: 170,
    backgroundColor: '#F7BA83',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10
 
  },
})