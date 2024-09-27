import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import React, {useState} from "react";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

const Screen03 = () => { 
    return (
        <View style={style.container}>
            <View style={style.containerFlud}>
                {/* Img here */}
                <View style={style.imageHeaderContainer}>
                    <Image style={{width: '100%', height: '85%', objectFit: 'contain'}}
                    source={require('../assets/img/Lab05/bione-removebg-preview.png')}></Image>
                </View>
                <View style={style.textComponentContainer}>
                    {/* Name here */}
                    <Text style={{fontSize: 30, letterSpacing: 1}}>Pina Mountain</Text>
                </View>
                <View style={[style.textComponentContainer, {flexDirection: 'row', alignItems:'flex-start',justifyContent: 'flex-start', columnGap: 35}]}>
                    {/* Price here */}
                    <Text style={[style.blurText,{fontSize: 25, letterSpacing: 1}]}>15% OFF I 350$</Text>
                    <Text style={[{fontSize: 25, letterSpacing: 1,textDecorationLine: 'line-through'}]}>449$</Text>
                </View>
                <View style={style.textComponentContainer}>
                    <Text style={{fontSize: 22, letterSpacing: 1}}>Description</Text>
                </View>
                <View style={style.descriptionTextContainer}>
                    <Text style={{fontSize: 19, letterSpacing: 0.45, lineHeight: 27.4}}>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text>
                </View>
                <View style={style.optionContainer}>
                    <TouchableOpacity style={{width: '15%', height: '55%', justifyContent: 'center', alignItems: 'center'}}>
                        <FontAwesomeIcon name="heart" size={40}></FontAwesomeIcon>
                    </TouchableOpacity>

                    <TouchableOpacity style={{width: '70%', height: '55%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#E94141', borderRadius: 30}}>
                        <Text style={{fontSize: 23, letterSpacing: 1, color: '#fff'}}>Add to card</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Screen03;

const style = StyleSheet.create({
    blurText: {
        color: '#969DAA',
    },
    container: {
        width: "100%",
        height: 1000,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    containerFlud: {
        width: '95%',
        height: '100%',
    },
    imageHeaderContainer: {
        width: '100%',
        height: 300,
        backgroundColor: '#f8e6e5',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textComponentContainer: {
        width: '100%',
        height: 40,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    descriptionTextContainer: {
        width: '100%',
        height: 150,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingHorizontal: 10
    },
    optionContainer: {
        width: '100%',
        height: 120,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection: 'row',
    },
});