import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import AntIcon from 'react-native-vector-icons/AntDesign';
import EvilIcon from 'react-native-vector-icons/EvilIcons';


const APIScreen02 = ({navigation}) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={style.container}>
                <TouchableOpacity
                onPress={() => navigation.navigate('APIScreen03')}
                style={style.itemComponent}>
                    <View style={style.imageContainer}>
                        <Image source={{}}></Image>
                    </View>
                    <View style={[style.statusChangeGroup, style.row]}>
                        <View style={style.statusChangeItem}>
                            <AntIcon name='check' size={20} color='#1DD75B'></AntIcon>
                            <Text style={style.availableText}>Accepting Orders</Text>
                        </View>

                        <View style={style.statusChangeItem}>
                            <AntIcon name='clockcircleo' size={20} color='#1DD75B'></AntIcon>
                            <Text style={style.unavailableText}>5-10 minutes</Text>
                        </View>

                        <TouchableOpacity style={style.locationContainer}>
                            <EvilIcon name='location' size={35} color='#1DD75B'></EvilIcon>
                        </TouchableOpacity>
                    </View>

                    <View style={[style.statusChangeGroup, style.column]}>
                        <Text style={{fontWeight: 'bold'}}>Kitanda Espresso & Acai-U District</Text>
                        <Text>1121 NE 45 St</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={style.itemComponent}>
                    <View style={style.imageContainer}>
                        <Image style={style.img} source={require('../assets/img/Lab07/Image.png')}></Image>
                    </View>
                    <View style={[style.statusChangeGroup, style.row]}>
                        <View style={style.statusChangeItem}>
                            <AntIcon name='lock' size={20} color='#DE3B40'></AntIcon>
                            <Text style={style.unavailableText}>Tempory Unavailable</Text>
                        </View>

                        <View style={style.statusChangeItem}>
                            <AntIcon name='clockcircleo' size={20} color='#1DD75B'></AntIcon>
                            <Text style={style.unavailableText}>10-15 minutes</Text>
                        </View>

                        <TouchableOpacity style={style.locationContainer}>
                            <EvilIcon name='location' size={35} color='#1DD75B'></EvilIcon>
                        </TouchableOpacity>
                    </View>

                    <View style={[style.statusChangeGroup, style.column]}>
                        <Text style={{fontWeight: 'bold'}}>Jewel Box Cafe</Text>
                        <Text>1145 GE 54 St</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={style.itemComponent}>
                    <View style={style.imageContainer}>
                        <Image style={style.img} source={require('../assets/img/Lab07/Image (1).png')}></Image>
                    </View>
                    <View style={[style.statusChangeGroup, style.row]}>
                        <View style={style.statusChangeItem}>
                            <AntIcon name='lock' size={20} color='#DE3B40'></AntIcon>
                            <Text style={style.unavailableText}>Tempory Unavailable</Text>
                        </View>

                        <View style={style.statusChangeItem}>
                            <AntIcon name='clockcircleo' size={20} color='#1DD75B'></AntIcon>
                            <Text style={style.unavailableText}>15-20 minutes</Text>
                        </View>

                        <TouchableOpacity style={style.locationContainer}>
                            <EvilIcon name='location' size={35} color='#1DD75B'></EvilIcon>
                        </TouchableOpacity>
                    </View>

                    <View style={[style.statusChangeGroup, style.column]}>
                        <Text style={{fontWeight: 'bold'}}>Javasti Cafe</Text>
                        <Text>1167 GE 54 St</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={style.itemComponent}>
                    <View style={style.imageContainer}>
                        <Image style={style.img} source={require('../assets/img/Lab07/Image (2).png')}></Image>
                    </View>
                    <View style={[style.statusChangeGroup, style.row]}>
                        <View style={style.statusChangeItem}>
                            <AntIcon name='lock' size={20} color='#DE3B40'></AntIcon>
                            <Text style={style.unavailableText}>Tempory Unavailable</Text>
                        </View>

                        <View style={style.statusChangeItem}>
                            <AntIcon name='clockcircleo' size={20} color='#1DD75B'></AntIcon>
                            <Text style={style.unavailableText}>15-20 minutes</Text>
                        </View>

                        <TouchableOpacity style={style.locationContainer}>
                            <EvilIcon name='location' size={35} color='#1DD75B'></EvilIcon>
                        </TouchableOpacity>
                    </View>

                    <View style={[style.statusChangeGroup, style.column]}>
                        <Text style={{fontWeight: 'bold'}}>Trung Nguyen Legend Cafe</Text>
                        <Text>1167 GE 54 St</Text>
                    </View>
                </TouchableOpacity>



                
        </View>
        </ScrollView>
    );
};

export default APIScreen02;

const style = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
        paddingHorizontal: 5
    },
    availableText: {
        color: '#1DD75B'
    },
    unavailableText: {
        color: '#DE3B40'
    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    container: {
        width: '100%',
        height: 900,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    itemComponent: {
        width: '95%',
        height: 200,
        margin: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        flexDirection: 'column',
        flexWrap: 'wrap',
        borderRadius: 6,
    },
    imageContainer: {
        width: '100%',
        height: '50%',
        objectFit: 'contain',
        backgroundColor: '#D9D9D9',
        borderRadius: 6,
    },
    statusChangeGroup: {
        width: '100%',
        height: '25%',
        justifyContent: 'space-around',
    },
    statusChangeItem: {
        width: '44%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#F3F4F6',
        paddingVertical: 10,
        columnGap: 5
    },
    locationContainer: {
        width: '10%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});