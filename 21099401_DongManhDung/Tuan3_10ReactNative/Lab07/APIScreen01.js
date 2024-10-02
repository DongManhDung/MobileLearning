import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

const APIScreen01 = ({navigation}) => {
    return (
        <View style={style.container}>
            <View style={style.itemComponent}>
                <Text style={{fontSize: 22, fontWeight: 'bold'}}>Welcome to Cafe world</Text>
            </View>

            <View style={style.itemComponent}>
                <View style={style.itemComponentCenter}>
                        <Image
                        style={style.img}
                        source={require('../assets/img/Lab07/Image.png')}></Image>
                </View>
            </View>

            <View style={style.itemComponent}>
                <View style={style.itemComponentCenter}>
                    <Image
                        style={style.img}
                        source={require('../assets/img/Lab07/Image (1).png')}></Image>
                </View>
            </View>

            <View style={style.itemComponent}>
                <View style={[style.itemComponentCenter, {backgroundColor: '#D9D9D9'}]}>
                </View>
            </View>

            <View style={style.itemComponent}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('APIScreen02')}
                style={{justifyContent: 'center', alignItems: 'center', width: '90%', height: '70%', backgroundColor: '#00BDD6', borderRadius: 6}}>
                    <Text style={{color: '#fff', fontSize: 22}}>GET STARTED</Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
};

export default APIScreen01;

const style = StyleSheet.create({
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'contain'
    },
    container: {
        width: '100%',
        height: 900,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    itemComponent: {
        width: '95%',
        height: 100,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemComponentCenter: {
        width: '60%',
        height: '100%',
        borderRadius: 6
    },
});