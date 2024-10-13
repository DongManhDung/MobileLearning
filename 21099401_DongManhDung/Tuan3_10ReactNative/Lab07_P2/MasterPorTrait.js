import react, {useState} from "react";
import {Text, StyleSheet, View, TouchableOpacity, FlatList, ScrollView, TextInput, Image} from "react-native";

const DATA = [
  {
    id: 1,
    name: 'Tasty Donut',
    image: require('../assets/img/Lab07_P2/donut_yellow 1.png'),
    description: 'Spicy tasty donut family',
    price: '10.00',
  },

  {
    id: 2,
    name: 'Pink Donut',
    image: require('../assets/img/Lab07_P2/tasty_donut 1.png'),
    description: 'Spicy tasty donut family',
    price: '20.00',
  },

  {
    id: 3,
    name: 'Floating Donut',
    image: require('../assets/img/Lab07_P2/green_donut 1.png'),
    description: 'Spicy tasty donut family',
    price: '30.00',
  },

  {
    id: 4,
    name: 'Tasty Donut',
    image: require('../assets/img/Lab07_P2/donut_red 1.png'),
    description: 'Spicy tasty donut family',
    price: '40.00',
  },
];


const ItemComponent = ({item, navigation}) => {
  return(
      <TouchableOpacity style={style.itemComponent} onPress={() => navigation.navigate('DetailPorTrait', { item })}>
              <View style={style.leftComponent}>
                <Image style={{width: '95%', height: '95%', objectFit: 'cover'}} 
                source={item.image}></Image>
              </View>
              <View style={style.rightComponent}>
                <Text style={{fontWeight: '600', fontSize: 20}}>{item.name}</Text>
                <Text style={{color: 'gray', fontSize: 15}}>{item.description}</Text>
                <Text style={{fontWeight: '600', fontSize: 20}}>${item.price}</Text> 
                <TouchableOpacity style={style.absolutePlusBtn}
                >
                  <Text>+</Text>
                </TouchableOpacity>
              </View>
    </TouchableOpacity>
  );
};

const MasterPorTrait = ({navigation}) => {
  //category button
  const categories = ['Donut', 'Pink Donut', 'Floating Donut'];
  const [selectedCategory, setSelectedCategory] = useState('Donut');
  const filteredData = (selectedCategory === 'Donut' ? DATA : DATA.filter(item => item.name === selectedCategory));

  //search
  // const [searchQuery, setSearchQuery] = useState('');
  // const [searchData, setSearchData] = useState(DATA);

  

  // const handleSearch = () => {
  //   const newData = DATA.filter(item => {
  //     const itemName = item.name.toLowerCase();
  //     const searchText = searchQuery.toLowerCase();
  //     return itemName.indexOf(searchText) > -1;
  //   });

  //   setSearchData(newData);
  // };

  


  return(
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <View style={style.container}>
        <View style={style.fludComponent}>
          <Text>Welcome, Jala!</Text>
        </View>

        <View style={style.fludComponent}>
          <Text style={{fontSize: 20, fontWeight: '600'}}>Choice you Best food</Text>
        </View>

        <View style={[style.fludComponent, style.searchContainer]}>
          <TextInput style={style.searchBar} 
          editable 
          placeholder="Search food"
          // value={searchQuery}
          // onChangeText={(text) => setSearchQuery(text)}
          ></TextInput>
          <TouchableOpacity style={{width: '25%', height: '100%', backgroundColor: '#F1B000'}}
          // onPress={handleSearch}
          >
              {/* nothing here because fontAwesome isn't working in Snack */}
              
          </TouchableOpacity>
        </View>

        <View style={style.categoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              style.categoryButton,
              selectedCategory === category && style.selectedCategory,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={style.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

        <View style={style.itemContainer}>
          <FlatList data={filteredData}
          renderItem={({item}) => 
          <ItemComponent 
          item = {item} navigation = {navigation} />}
          keyExtractor={item => item.id}/>            
        </View>

      </View>
      </ScrollView>
  );
}

export default MasterPorTrait;

const style = StyleSheet.create({
  absolutePlusBtn: {
    position:'absolute',
    width: 50,
    height: 50,
    backgroundColor: '#F1B000',
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
    bottom: 0,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopStartRadius: 25
  },
  container: {
    width: '100%',
    height: 1000,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  fludComponent: {
    width: '95%',
    height: 30,
    marginTop: 5
  },

  searchContainer: {
    height: 50,
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    flexDirection: 'row'
  },

  searchBar: {
    width: '75%',
    height: '100%',
    borderWidth: 0.5,
    borderColor: 'gray',
    paddingHorizontal: 10,
    color: 'gray',
    borderRadius: 3,
  },

  optionContainer: {
   height: 40,
   backgroundColor: 'transparent',
  },

  itemContainer: {
    width: '95%',
    rowGap: 10,
    paddingVertical: 10
  },

  itemComponent: {
    width: '100%',
    height: 150,
    backgroundColor: '#F4DDDD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 10
  },
  leftComponent: {
    width: '40%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightComponent: {
    width: '60%',
    height: '100%',
    justifyContent: 'space-around',
    paddingHorizontal: 10
  },

  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    width: '95%',
    height: 60,
    alignItems: 'center',
  },
  categoryButton: {
    backgroundColor: '#f0f0f0',
    height: 40, 
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    paddingHorizontal:7,
    },
  selectedCategory: {
    backgroundColor: '#ffd700',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyMessage: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
});