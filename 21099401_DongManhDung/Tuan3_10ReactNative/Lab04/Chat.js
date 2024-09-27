import {View, StyleSheet, Text, Image, ScrollView, TouchableOpacity, FlatList} from 'react-native'

const DATA = [
  {
    id: 1,
    title: 'Ca nấu lẩu, ca mì mini...',
    img: require('../assets/img/Lab04/screen1/ca_nau_lau.png'),
    from: 'Shop Devang',
  },
  {
    id: 2,
    title: '1KG KHÔ GÀ BƠ TỎI',
    img: require('../assets/img/Lab04/screen1/ga_bo_toi.png'),
    from: 'Shop LTD Food',
  },
  {
    id: 3,
    title: 'Xe cần cẩu đa năng',
    img: require('../assets/img/Lab04/screen1/xa_can_cau.png'),
    from: 'Shop Thế giới đồ chơi',
  },
  {
    id: 4,
    title: 'Đồ chơi dạng mô hình',
    img: require('../assets/img/Lab04/screen1/do_choi_dang_mo_hinh.png'),
    from: 'Shop Thế giới đồ chơi',
  },
  {
    id: 5,
    title: 'Lãnh đạo giản đơn',
    img: require('../assets/img/Lab04/screen1/lanh_dao_gian_don.png'),
    from: 'Shop Minh Long Book',
  },
  {
    id: 5,
    title: 'Hiểu lòng con trẻ',
    img: require('../assets/img/Lab04/screen1/hieu_long_con_tre.png'),
    from: 'Shop Minh Long Book',
  },
  {
    id: 6,
    title: 'Donal Trump Thiên tài lãnh đạo',
    img: require('../assets/img/Lab04/screen1/trump 1.png'),
    from: 'Shop Minh Long Book',
  },
];

const ItemComponent = ({title, img, from}) => (
                  <View style={style.itemGroup}>
                <View style={style.imageItem}>
                    <Image source={img}
                    style={style.image}></Image>
                </View>
                <View style={style.textItem}>
                    <Text>{title}</Text>
                    <Text style={{color: '#E83030'}}>{from}</Text>
                </View>
                <View style={style.chatBtnItem}>
                  <TouchableOpacity style={style.btn}>
                    <Text style={{color: '#fff'}}>Chat</Text>
                  </TouchableOpacity>
                </View>
              </View>
);

const Chat = () => {
  return(
    <ScrollView
    showsVerticalScrollIndicator= {false}
    >
      <View style={style.container}>
          <View style = {style.textContainer}>
            <Text style={[style.text90pc, style.text13]}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!</Text>
          </View>

          <View style={style.itemContainer}>
              <FlatList
              data={DATA}
              renderItem={({item}) => <ItemComponent title={item.title} img={item.img} from={item.from}/>}
              keyExtractor={item => item.id}
              >
              </FlatList>
          </View>
      </View>
    </ScrollView>
  );
};

export default Chat;

const style = StyleSheet.create({
  text13: {
    fontSize: 13
  },
  text90pc: {
    width: '90%',
  },
  image: {
    objectFit: 'contain',
  },
  btn: {
    width: '90%',
    height: '40%',
    backgroundColor: '#F31111',
    justifyContent: 'center',
    alignItems: 'center'
  },
    container: {
      width: '100%',
      height: 1000,
      backgroundColor: '#e8e4e4'
    },
    textContainer: {
      width: '100%',
      height: 70,
      backgroundColor: '#e8e4e4',
      justifyContent: 'center',
      alignItems: 'center'
    },
    itemContainer: {
      width: '100%',
      backgroundColor: 'transparent',
      flexDirection: 'column'
    },
    itemGroup: {
       width: '100%',
       height: 80,
       justifyContent: 'center',
       alignItems: 'center',
       flexDirection:'row',
       flexWrap: 'wrap',
       backgroundColor: 'white',
       borderBottomColor: 'gray',
       borderBottomWidth: 0.5,
       borderStyle: 'solid'
    },
    imageItem: {
      width: '25%',
      height: '100%',
      
    },
    textItem: {
      width: '50%',
      height: '100%',
    }, 
    chatBtnItem: {
      width: '25%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    }
})