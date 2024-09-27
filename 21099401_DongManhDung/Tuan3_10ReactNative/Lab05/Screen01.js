import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from "react-native";


const Screen01 = ({navigation}) => {
    return (
        <View style={style.container}>
            <View style={style.textHeaderContainer}>
                <Text style={style.textHeader}>A premium online store for {'\n'} sporter and their stylish choice</Text>
            </View>

            <View style={style.imgContainer}>
                <View style={style.imageFlud}>
                    <Image style={style.image} source={require('../assets/img/Lab05/bifour_-removebg-preview.png')}></Image>
                </View>
            </View>

            <View style={style.textHeaderContainer}>
                <Text style={[style.textHeader, {fontSize: 30, fontWeight: 'bold'}]}>POWER BIKE {'\n'} SHOP</Text>
            </View>

            <View style={style.btnContainer}>
                <TouchableOpacity style={style.btn}
                onPress={() => navigation.navigate("Screen02")}
                >
                    <Text style={{fontSize: 25, letterSpacing: 1, color: '#fff'}}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Screen01;

const style = StyleSheet.create({
    image: {
        width: '80%',
        height: '80%',
        objectFit: 'contain',
    },
    container: {
        backgroundColor: '#F9F7F6',
        width: '100%',
        height: 1000,
    },
    textHeaderContainer: {
        width: '100%',
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeader: {
        fontSize: 26,
        textAlign: 'center',
        letterSpacing: 0.75,
        fontFamily: 'VT323-Regular',
        fontWeight: '500'
    },
    imgContainer: {
        width: '100%',
        height: 350,
        // backgroundColor: 'cyan',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageFlud: {
        width: '98%',
        height: '100%',
        backgroundColor: '#f8e6e5',
        borderRadius: 50,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    btnContainer: {
        width: '100%',
        height: 70,
        
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        width: '95%',
        height: '100%',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
});