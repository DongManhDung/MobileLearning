import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ScrollView } from "react-native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

const Data = [
    {
        id: 1,
        image: require('../assets/img/Lab05/bifour_-removebg-preview.png'),
        name: 'Pinarello',
        price: 1800,
    },
    {
        id: 2,
        image: require('../assets/img/Lab05/bione-removebg-preview.png'),
        name: 'Pina Mountai',
        price: 1700,
    },
    {
        id: 3,
        image: require('../assets/img/Lab05/bithree_removebg-preview.png'),
        name: 'Pina bike',
        price: 1500,
    },
    {
        id: 4,
        image: require('../assets/img/Lab05/bitwo-removebg-preview.png'),
        name: 'Pinarello',
        price: 1900,
    },
    {
        id: 5,
        image: require('../assets/img/Lab05/bithree_removebg-preview.png'),
        name: 'Pinarello',
        price: 2700,
    },

    {
        id: 6,
        image: require('../assets/img/Lab05/bione-removebg-preview.png'),
        name: 'Pinarello',
        price: 1350,
    },
];

const itemConponent = (image, name, price) => {
    return(
                    <TouchableOpacity style={style.productItem}>
                        <TouchableOpacity style={{width: 60, height: 50, backgroundColor: 'transparent', position: 'absolute', zIndex: 1}}>
                            <FontAwesomeIcon name='heart' size={25} style={{paddingHorizontal: 10, paddingVertical: 5}}></FontAwesomeIcon>
                        </TouchableOpacity>
                        <Image style={{width: '100%', height:'70%', objectFit: 'contain'}} source={image}></Image>
                        <Text style={{textAlign:'center', fontSize: 22, fontFamily: 'Voltaire'}}>{name}</Text>
                        <Text style={{textAlign:'center', fontSize: 22}}><Text style={{color: "#F7BA83"}}>$</Text> {price}</Text>
                    </TouchableOpacity>
    );
};


const Screen02 = ({navigation}) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={style.container}>
            <View style={style.component80Container}>
                <Text style={[style.textContainer,style.bigText, style.dangerText, style.boldText]}>The world’s Best Bike</Text>
            </View>

            <View style={style.component80Container}>
                <View style={style.optionContainer}>
                    <TouchableOpacity style={[style.miniBtn, style.dangerBorder]}>
                        <Text style={[style.text, style.dangerText]}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[style.miniBtn, style.dangerBorder]}>
                        <Text style={[style.text, style.blurText]}>Roadbike</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[style.miniBtn, style.dangerBorder]}>
                        <Text style={[style.text, style.blurText]}>Mountain</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={style.productContainer}>
                <View style={style.productFlud}>
                    <TouchableOpacity onPress={() => navigation.navigate('Screen03')}>
                            {/* Component here */}
                            <FlatList 
                                data={Data}
                                renderItem={({item}) => itemConponent(item.image, item.name, item.price, item.navigation)}
                                numColumns={2}
                                keyExtractor={item => item.id.toString()}
                                contentContainerStyle={{ rowGap: 20}}
                                columnWrapperStyle={{ gap: 5}}
                            >
                            </FlatList>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </View>
        </ScrollView>
    );
};

export default Screen02;

const style = StyleSheet.create({
    text: {
        fontSize: 17,
    },
    boldText: {
        fontWeight: 'bold'
    },
    dangerText: {
        color: '#E94141'
    },
    blurText: {
        color: '#A0A0A0'
    },
    bigText: {
        fontSize: 25,
        fontFamily: 'Ubuntu',
        lineHeight: 28.3,
    },
    dangerBorder: {
        borderColor: '#E94141',
        borderWidth: 1,
    },
    miniBtn: {
        width: '28%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 5
    },
    container: {
        width: '100%',
        height: 1000,
        backgroundColor: '#fff',
    },
    component80Container: {
        width: '100%',
        height: 80,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textContainer: {
        width: '95%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    optionContainer: {
        width: '95%',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        flexDirection: 'row',
    },
    productContainer: {
        width: '100%',
        height: 700,
        justifyContent: 'center',
        alignItems: 'center',
    },
    productFlud: {
        width: '95%',
        height: '100%',
    },
    productItem: {
        width: '49%',
        height: 200,
        backgroundColor: '#fef5ed',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        elevation: 5,
        shadowOffset: {
            width: 1,
            height: 3,
        },
        borderRadius: 10,   
        paddingVertical: 5,
    }
});
