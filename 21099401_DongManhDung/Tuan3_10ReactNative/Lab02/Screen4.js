import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";

const Screen4 = () => {
  return (
    <View style={style.container}>
      <View style={style.containerFlud}>
        <View style={style.header}>
          <View style={style.headerFlud}>
            <View style={style.itemHeaderGroup}>
              <Image
                source={require("../assets/img/Lab02/nguyen_ham_tich_phan.png")}
                style={{ width: "35%", height: "100%", objectFit: "cover" }}
              ></Image>
              <View style={style.itemHeaderRight}>
                <Text style={{ fontWeight: "bold" }}>
                  Nguyên hàm tích phân và ứng dụng
                </Text>

                <Text style={{ fontWeight: "bold" }}>
                  Cung cấp bởi Tiki Trading
                </Text>

                <Text
                  style={{ color: "red", fontWeight: "bold", fontSize: 20 }}
                >
                  141.800 đ
                </Text>

                <Text
                  style={{
                    color: "gray",
                    fontWeight: "bold",
                    textDecorationLine: "line-through",
                  }}
                >
                  141.800 đ
                </Text>

                <View style={style.optionGroup}>
                  <View style={style.addQuantityGroup}>
                    <TouchableOpacity style={style.addQuantityBtn}>
                      <Text
                        style={{
                          color: "black",
                          fontSize: 25,
                          fontWeight: "bold",
                        }}
                      >
                        -
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.addQuantityBtn}>
                      <Text
                        style={{
                          color: "black",
                          fontSize: 25,
                          fontWeight: "bold",
                        }}
                      >
                        1
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.addQuantityBtn}>
                      <Text
                        style={{
                          color: "black",
                          fontSize: 25,
                          fontWeight: "bold",
                        }}
                      >
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={style.buyAfterBtn}>
                    <TouchableOpacity
                      style={{
                        width: "100%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: "#134fec",
                          fontSize: 18,
                          fontWeight: "bold",
                        }}
                      >
                        Mua sau
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            <View style={style.discountVoucherContainer}>
              <View style={style.discountVoucherGroup}>
                <TouchableOpacity style={{ justifyContent: "center" }}>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    Mã giảm giá đã lưu
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ justifyContent: "center" }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "#134fec",
                    }}
                  >
                    Xem tại đây
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={style.discountVoucherInputContainer}>
              <View style={style.discountVoucherInputText}>
                <TextInput value={""} style={style.textVoucherInput}>
                  Mã giảm giá
                </TextInput>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: "#0a5eb7",
                  width: "25%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}
                >
                  Áp dụng
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={style.body}>
          <View style={style.bodyFlud}>
            <View style={{width: '60%',height: '60%', paddingHorizontal: 10}}>
              <Text style={{width: '100%',height: 70, fontSize: 17, fontWeight: 'bold', textAlign: 'center'}}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
            </View>

            <View style={{width: '40%',height: '60%', paddingHorizontal: 10}}>
              <Text style={{width: '100%',height: 70, fontSize: 17, fontWeight: 'bold', color: '#134fec'}}>Nhập tại đây?</Text>
            </View>
          </View>
        </View>

        <View style={style.footerContainer}>
                <View style={style.footerItem}>
                        <View style={style.footerGroupItem}>
                            <Text style={{fontSize: 25, fontWeight: '600'}}>Tạm tính</Text>
                            <Text style={{fontSize: 25, fontWeight: '600', color: 'red'}}>141.800 đ</Text>
                        </View>
                </View>
                <View style={[style.footerItem, {flexDirection: 'column', height: 150}]}>
                    <View style={style.footerGroupItem}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center', height: 60,width: '100%'}}>
                            <Text style={{fontSize: 25, fontWeight: '600'}}>Thành tiền</Text>
                            <Text style={{fontSize: 25, fontWeight: '600', color: 'red'}}>141.800 đ</Text>
                        </View>
                    </View>
                    

                    <TouchableOpacity style={{width: '90%', height: 50, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 25, fontWeight: '600', color: 'white'}}>TIẾN HÀNH ĐẶT HÀNG</Text>
                    </TouchableOpacity>
                </View> 
        </View>
        
      </View>
    </View>
  );
};

export default Screen4;

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  containerFlud: {
    width: "100%",
    height: 900,
    backgroundColor: "#c4c4c4",
  },
  header: {
    width: "100%",
    backgroundColor: "white",
  },
  headerFlud: {
    width: "100%",
    height: 400,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  itemHeaderGroup: {
    width: "90%",
    height: "50%",
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  itemHeaderRight: {
    width: "65%",
    height: "100%",
    // backgroundColor: 'blue',
    justifyContent: "space-around",
    alignContent: "center",
    alignItems: "flex-start",
    paddingLeft: 10,
  },
  optionGroup: {
    width: "100%",
    // backgroundColor: 'lime',
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addQuantityGroup: {
    width: "65%",
    height: "100%",
    // backgroundColor: 'blue',
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    columnGap: 10,
  },
  addQuantityBtn: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#c4c4c4",
  },
  buyAfterBtn: {
    width: "35%",
    height: "100%",
    // backgroundColor: 'red',
  },
  discountVoucherContainer: {
    width: "90%",
    height: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  discountVoucherGroup: {
    width: "70%",
    height: "100%",
    // backgroundColor: 'yellow',
    flexDirection: "row",
    justifyContent: "space-between",
  },
  discountVoucherInputContainer: {
    width: "90%",
    height: 60,
    // backgroundColor: 'pink',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  discountVoucherInputText: {
    width: "70%",
    height: 60,
    borderRadius: 10,
  },
  textVoucherInput: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25,
    fontWeight: "bold",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
  },
  body: {
    width: "100%",
    height: 70,
    backgroundColor: "white",
    top: 15,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  bodyFlud: {
    width: '90%',
    height: '100%',
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerContainer: {
    width: '100%',
    height: 300,
    top: 30,
    backgroundColor: '#c4c4c4',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerItem: {
    width: '100%',
    height: '25%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  footerGroupItem: {
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
},
});
