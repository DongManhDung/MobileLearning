import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const imgData = [
  {
    imgId: 1,
    image: require("../assets/img/Lab04/screen2/giacchuyen 1.png"),
  },
  {
    imgId: 2,
    image: require("../assets/img/Lab04/screen2/daynguon 1.png"),
  },
  {
    imgId: 3,
    image: require("../assets/img/Lab04/screen2/dauchuyendoipsps2 1.png"),
  },
  {
    imgId: 4,
    image: require("../assets/img/Lab04/screen2/dauchuyendoi 1.png"),
  },
  {
    imgId: 5,
    image: require("../assets/img/Lab04/screen2/carbusbtops2 1.png"),
  },
  {
    imgId: 6,
    image: require("../assets/img/Lab04/screen2/daucam 1.png"),
  },
];

const ItemComponent = ({ image }) => (
  <View style={style.productItem}>
    <Image style={style.image} source={image}></Image>
    <Text>Cáp chuyển từ Cổng USB sang PS2...</Text>
    <View style={style.rateStarGroup}>
      <FontAwesomeIcon name="star" color="yellow" size={17}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" color="yellow" size={17}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" color="yellow" size={17}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" color="yellow" size={17}></FontAwesomeIcon>
      <FontAwesomeIcon name="star" color="yellow" size={17}></FontAwesomeIcon>
      <Text>(15)</Text>
    </View>
    <View style={style.priceGroup}>
      <Text style={[style.boldText]}>69.000 đ</Text>
      <Text style={[style.blurText]}>-39%</Text>
    </View>
  </View>
);

const Products = () => {
  return (
    <ScrollView 
        showsVerticalScrollIndicator={false}
    > 
      <View style={style.container}>
        <View style={style.productContainer}>
          <View style={style.productItemGroup}>
            {/* Component here */}
            <FlatList
              data={imgData}
              renderItem={({ item }) => <ItemComponent image={item.image} />}
              numColumns={2}
              keyExtractor={(item) => item.imgId}
            ></FlatList>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Products;

const style = StyleSheet.create({
  image: {
    width: "90%",
    height: 80,
    objectFit: "contain",
  },
  boldText: {
    fontWeight: "bold",
  },
  blurText: {
    color: "#969DAA",
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  productContainer: {
    width: "100%",
    height: 1000,
    backgroundColor: "#e8e4e4",
    flexDirection: "row",
  },
  productItemGroup: {
    width: "100%",
    flexDirection: "row",
  },
  productItem: {
    width: "50%",
    height: 250,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  rateStarGroup: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  priceGroup: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "90%",
    alignItems: "center",
  },
});
