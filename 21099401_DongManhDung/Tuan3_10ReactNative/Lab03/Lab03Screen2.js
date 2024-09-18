import react, {useState} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from "react-native";
// import Items from "./Items.json";

const Lab03Screen2 = ({route, navigation}) => {
    const { vietColorText } = route.params;
    const { img } = route.params;
    const { price } = route.params;
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={style.container}>
            <View style={style.productContainer}>
                <View style={style.productLeftItem}>
                    <Image style={style.image}
                    source={JSON.stringify(img)}
                    ></Image>
                </View>

                <View style={[style.productRightItem, {paddingVertical: 20}]}>
                    <Text style={style.text}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
                    <Text style={style.text}>Màu: <Text style={style.boldText}>{JSON.parse(JSON.stringify(vietColorText))}</Text></Text>
                    <Text style={style.text}>Cung cấp bởi <Text style={style.boldText}>Tiki Tradding</Text></Text>
                    <Text style={[style.text, style.boldText]}>{JSON.parse(JSON.stringify(price))}</Text>
                </View>
            </View>

            <View style={style.selectColorContainer}>
                <View style={style.selectTextContainer}>
                    <Text style={style.text}>Chọn một màu bên dưới:</Text>
                </View>
                <View style={style.colorContainer}>
                    <TouchableOpacity 
                    onPress = {() => navigation.navigate('Lab03Screen2', 
                    {   vietColorText: 'Bạc'
                        ,img: require('../assets/img/Lab03/vs_silver.png')
                        ,price: '1.990.000 đ'
                    })}
                    style={[style.colorItem, style.item1]}>

                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress = {() => navigation.navigate('Lab03Screen2', 
                    {   vietColorText: 'Đỏ'
                        ,img: require('../assets/img/Lab03/vs_red.png'),
                        price: '1.790.000 đ'
                    ,})}
                    style={[style.colorItem , style.item2]}>

                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress = {() => navigation.navigate('Lab03Screen2', 
                        {   vietColorText: 'Đen'
                            ,img: require('../assets/img/Lab03/vs_black.png')
                            ,price: '1.690.000 đ'
                        ,})}
                    style={[style.colorItem , style.item3]}>

                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress = {() => navigation.navigate('Lab03Screen2', 
                        {   vietColorText: 'Xanh'
                            ,img: require('../assets/img/Lab03/vs_blue.png'),
                            price: '1.890.000 đ'
                        ,})}
                    style={[style.colorItem , style.item4]}>

                    </TouchableOpacity>
                </View>
            </View>

            <View style={style.buttonContainer}>
                <TouchableOpacity style={style.button}>
                    <Text style={[{color: '#fff', fontSize: 22, letterSpacing: 0.4, textTransform: 'uppercase'}]}>Xong</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    );
    
};

export default Lab03Screen2;

const style = StyleSheet.create({
    image: {
        width: '100%',
        height : '100%',
        objectFit: 'cover',
    },
    text:{
        fontSize: 17,
        letterSpacing: 0.25,

    },
    boldText: {
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    productContainer: {
        width: '100%',
        height: 250,
        // backgroundColor: 'cyan',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        columnGap: 5,
    },
    productLeftItem: {
        width: '40%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    productRightItem: {
        width: '60%',
        height: '80%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        rowGap: 10,
    },
    selectColorContainer: {
        width: '100%',
        height: 450,
        backgroundColor: '#C4C4C4',
        alignItems: 'center',
        paddingVertical: 10,
    },
    selectTextContainer: {
        width: '95%',
        height: 30,
    },
    colorContainer: {
        width: '100%',
        height: 400,
        // backgroundColor: 'cyan',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 10,
    },

    colorItem: {
        width: '25%',
        height: 90,
    },
    item1: {
        backgroundColor: '#C5F1FB',
    },

    item2: {
        backgroundColor: '#F30D0D',
    },

    item3: {
        backgroundColor: '#000000',
    },

    item4: {
        backgroundColor: '#234896',
    },
    buttonContainer: {
        width: '100%',
        height: 150,
        backgroundColor: '#C4C4C4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: '90%',
        height: '35%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        borderColor: '#CA1536',
        borderWidth: 0.5,
        backgroundColor: '#1952E2'
    },
});
