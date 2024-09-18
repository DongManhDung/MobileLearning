import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

import Lab03Screen2 from "./Lab03Screen2.js";

const Lab03Screen1 = ({navigation}) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={style.container}>
            {/* Data Event */}
            <View style={style.imgHeaderContainer}>
                <Image 
                style={style.image}
                source={require('../assets/img/Lab03/vs_blue.png')}></Image>
            </View>
            <View style={style.itemContentContainer}>
                <Text style={style.text}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
            </View>

            <View style={style.itemContentContainer}>
                <View style={style.itemLeftContainer}>
                    <View style={[style.itemGroup, {width: '80%', justifyContent: 'space-evenly'}]}>
                        <TouchableOpacity>
                            <EvilIcons name={'star'} size={35} color='#E0E41A'></EvilIcons>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <EvilIcons name={'star'} size={35} color='#E0E41A'></EvilIcons>
                        </TouchableOpacity>
                        
                        <TouchableOpacity>
                            <EvilIcons name={'star'} size={35} color='#E0E41A'></EvilIcons>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <EvilIcons name={'star'} size={35} color='#E0E41A'></EvilIcons>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <EvilIcons name={'star'} size={35} color='#E0E41A'></EvilIcons>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={style.itemRightContainer}>
                    <Text style={style.miniText}>(Xem 828 đánh giá)</Text>
                </View>
            </View>

            <View style={style.itemContentContainer}>
                <View style={style.itemLeftContainer}>
                    <View style={style.itemGroup}>
                       <Text style={style.costText}>1.790.000 &#8363;</Text>
                    </View>
                </View>

                <View style={[style.itemRightContainer, style.appearFlexStart]}>
                    <Text style={[style.oldCostText]}>1.790.000 &#8363;</Text>
                </View>
            </View>

            <View style={style.itemContentContainer}>
                <View style={style.itemLeftContainer}>
                    <View style={style.itemGroup}>
                       <Text style={[style.costText, style.redNoticeText]}>Ở đâu rẻ hơn hoàn tiền</Text>
                    </View>
                </View>

                <View style={[style.itemRightContainer, style.appearFlexStart]}>
                    <FeatherIcon name={'help-circle'} size={30}></FeatherIcon>
                </View>
            </View>

            <View style={style.selectOptionContainer}>
                <TouchableOpacity 
                    
                onPress={() => navigation.navigate('Lab03Screen2', {
                    vietColorText: 'đỏ',
                    img: require('../assets/img/Lab03/vs_red.png'),
                    price: '1.790.000 đ'
                })}
                style={style.selectOptionFlud}>
                    <Text style={style.bigText}>4 MÀU-CHỌN MÀU</Text>
                    <EvilIcons style={{position: 'absolute', right: 0}} name='chevron-right' size={50}></EvilIcons>
                </TouchableOpacity>
            </View>

            <View style={style.buttonContainer}>
                <TouchableOpacity 
                style={style.buttonFlud}>
                    <Text style={{fontSize: 23, color: '#fff'}}>CHỌN MUA</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        </ScrollView>
    );
};

export default Lab03Screen1;

const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1
    },
    appearFlexStart: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    miniText: {
        fontSize: 14,
    },
    text: {
        fontSize: 16,
    },
    costText: {
        fontSize: 19,
        letterSpacing: 0.25,
        fontWeight: 'bold',
        width: '80%',
        textAlign: 'left'
    },
    costTextContainer:{
        width: '100%',
    },
    oldCostText: {
        textDecorationLine: 'line-through',
        fontSize: 15,
        letterSpacing: 0.5,
        fontWeight: 'bold',
        color: '#808080',
    },
    redNoticeText: {
        fontSize: 13,
        color: 'red',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    bigText: {fontSize: 20},
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'contain'
    },
    starIcon: {
        color: 'yellow',
    },
    imgHeaderContainer: {
        width: '100%',
        height: 400,
        backgroundColor: 'cyan',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemContentContainer: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        columnGap: 5
    },
    itemLeftContainer: {
        width: '60%',
        height: '100%',
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },

    itemGroup: {
        flexDirection: 'row',  
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 10,
        width: '100%',
        height: '100%'
    },

    itemRightContainer: {
        width: '40%',
        height: '100%',
        // backgroundColor: 'yellow',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },

    selectOptionContainer: {
        width: '100%',
        height: 60,
        // backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'    
    },
    selectOptionFlud: {
        width: '90%',
        height: '100%',
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: 'black',
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: {width: 5, height: 2},
        shadowOpacity: 0.25,
    },
    buttonContainer: {
        width: '100%',
        height: 150,
        // backgroundColor: 'yellow',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonFlud: {
        width: '90%',
        height: '45%',
        backgroundColor: 'red',
        borderWidth: 0.5,
        borderColor: 'black',
        borderRadius: 15,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
});