import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const Screen2 = () => {
  return (
    <View style={style.container}>
      <View style={style.containerFlud}>
        <View style={style.itemContainer}>
          <Image
            style={{ width: "25%", height: "100%", objectFit: "contain" }}
            source={require("../assets/img/Lab02/usbItem.png")}
          ></Image>
          <Text
            style={{
              width: "75%",
              height: "100%",
              fontSize: 19,
              fontWeight: "bold",
              top: 40,
              paddingHorizontal: 10,
            }}
          >
            USB Bluetooth Music Receiver HJX-001 - Biến loa thường thành loa
            bluetooth
          </Text>
        </View>

        <View style={style.satisfyTextContainer}>
          <Text
            style={{
              width: "100%",
              fontSize: 22,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Cực kỳ hài lòng
          </Text>
        </View>

        <View style={style.starRateContainer}>
          <View style={style.starGroup}>
            <TouchableOpacity><FontAwesomeIcon name="star"size={65} color={"#f2dd1b"}></FontAwesomeIcon></TouchableOpacity>
            <TouchableOpacity><FontAwesomeIcon name="star"size={65} color={"#f2dd1b"}></FontAwesomeIcon></TouchableOpacity>
            <TouchableOpacity><FontAwesomeIcon name="star"size={65} color={"#f2dd1b"}></FontAwesomeIcon></TouchableOpacity>
            <TouchableOpacity><FontAwesomeIcon name="star"size={65} color={"#f2dd1b"}></FontAwesomeIcon></TouchableOpacity>
            <TouchableOpacity><FontAwesomeIcon name="star"size={65} color={"#f2dd1b"}></FontAwesomeIcon></TouchableOpacity>
          </View>
        </View>

        <View style={style.addImageBtnContainer}>
          <TouchableOpacity style={style.addImageBtn}>
            <FontAwesomeIcon name={"camera"} size={60}></FontAwesomeIcon>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              Thêm hình ảnh
            </Text>
          </TouchableOpacity>
        </View>

        <View style={style.commentContainer}>
            <View style={style.commentBox}>
                <TextInput style={style.textCommentBox} value={'Hãy chia sẻ những điều mà bạn thích vè sản phẩm'}></TextInput>
            </View>
        </View>

        <View style={style.sentBtnContainer}>
            <View style={style.sentBtn}>
                <TouchableOpacity style={{width: '100%',height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 30, fontWeight: '600', color: '#fff'}}>Gửi</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
  );
};

export default Screen2;

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  containerFlud: {
    width: "100%",
    height: 1000,
    // backgroundColor: 'red',
  },
  itemContainer: {
    width: "100%",
    height: 150,
    // backgroundColor: "lime",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  satisfyTextContainer: {
    width: "100%",
    height: 50,
    // backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  starRateContainer: {
    width: "100%",
    height: 80,
    // backgroundColor: "cyan",
    justifyContent: "center",
    alignItems: "center",
  },
  starGroup: {
    height: "100%",
    width: "80%",
    justifyContent: "space-around",
    flexDirection: "row",
    
  },
  addImageBtnContainer: {
    width: "100%",
    height: 100,
    // backgroundColor: "cyan",
    justifyContent: "center",
    alignItems: "center",
  },
  addImageBtn: {
    width: "90%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 10,
    borderStyle: "solid",
  },
  commentContainer: {
    width: '100%',
    height: 300,
    // backgroundColor: 'lime',
    justifyContent: 'center',
    alignItems: 'center',
  },
  commentBox: {
    width: '90%',
    height: '85%',
    borderColor: 'gray',
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderRadius: 10,
  },
  textCommentBox: {
    width: '100%',
    height: '30%',
    fontSize: 25,
    textAlign: 'left',
    paddingHorizontal: 15,
    fontWeight: '600',
    color: 'gray',
    // backgroundColor: 'lime',
  },
  sentBtnContainer: {
    width: '100%',
    height: 100,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sentBtn: {
    width: '90%',
    height: '90%',
    backgroundColor: '#0d5db6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  }
});
