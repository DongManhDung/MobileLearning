import { Text, View,StyleSheet,TextInput, TouchableOpacity } from "react-native";
import react, {useState} from "react";
import { Checkbox } from "expo-checkbox";

const Screen3 = () => {
    const [isSelected1, setSelection1] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [isSelected3, setSelection3] = useState(false);
    const [isSelected4, setSelection4] = useState(false);
    return(
        <View style={style.container}>
            <View style={style.containerFlud}>
                <View style={style.formContainer}>
                    <View style={style.formHeaderGroup}>
                        <Text style={style.textHeader}>Password Generator</Text>
                    </View>

                    <View style={{width: '100%',height: 100, justifyContent: 'center', alignItems: 'center'}}>
                        <TextInput style={{width: '90%', height: '80%', backgroundColor: '#151537', color: '#fff', fontSize: 20}}></TextInput>
                    </View>

                    <View style={style.formBodyContainer}>
                        <View style={style.formBodyGroup}>
                            <View style={style.formBodyItem}>
                                <Text style={{width: '60%',fontSize: 22, paddingVertical: 15, fontWeight: 'bold', paddingLeft: 5, color: '#fff'}}>Password Length</Text>
                                <TextInput style={{width: '40%', height: '100%', backgroundColor: '#fff'}}></TextInput>
                            </View>

                            <View style={style.formBodyItem}>
                                <Text style={{width: '80%',fontSize: 22, paddingVertical: 15, fontWeight: 'bold', paddingLeft: 5, color: '#fff'}}>Include lower case letters</Text>
                                <Checkbox style={{width: '15%', height: '70%', backgroundColor: '#fff'}}
                                value={isSelected1}
                                onValueChange={setSelection1}
                                color={isSelected1 ? 'black' : undefined}
                                ></Checkbox>
                            </View>

                            <View style={style.formBodyItem}>
                                <Text style={{width: '80%',fontSize: 22, paddingVertical: 15, fontWeight: 'bold', paddingLeft: 5, color: '#fff'}}>Include upcase letters</Text>
                                <Checkbox style={{width: '15%', height: '70%', backgroundColor: '#fff'}}
                                value={isSelected2}
                                onValueChange={setSelection2}
                                color={isSelected2 ? 'black' : undefined}
                                ></Checkbox>
                            </View>

                            <View style={style.formBodyItem}>
                                <Text style={{width: '80%',fontSize: 22, paddingVertical: 15, fontWeight: 'bold', paddingLeft: 5, color: '#fff'}}>Include number</Text>
                                <Checkbox style={{width: '15%', height: '70%', backgroundColor: '#fff'}}
                                value={isSelected3}
                                onValueChange={setSelection3}
                                color={isSelected3 ? 'black' : undefined}
                                ></Checkbox>
                            </View>

                            <View style={style.formBodyItem}>
                                <Text style={{width: '80%',fontSize: 22, paddingVertical: 15, fontWeight: 'bold', paddingLeft: 5, color: '#fff'}}>Include special symbol</Text>
                                <Checkbox style={{width: '15%', height: '70%', backgroundColor: '#fff'}}
                                value={isSelected4}
                                onValueChange={setSelection4}
                                color={isSelected4 ? 'black' : undefined}
                                ></Checkbox>
                            </View>
                        </View>
                    </View>

                    <View style={style.formFooter}>
                        <TouchableOpacity style={style.generatePasswordBtn}>
                            <Text style={{fontSize: 23, textTransform: 'uppercase', fontWeight: 'bold', color: '#fff'}}>Generate Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Screen3; 

const style = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
    },
    containerFlud: {
        width: '100%',
        height: 850,
        backgroundColor: '#9595c1',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        width: '90%',
        height: '90%',
        backgroundColor: '#23235b',
        borderRadius: 20
    },
    formHeaderGroup: {
        width: '100%',
        height: 150,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'lime',
    },
    textHeader: {
        fontSize: 30, 
        width: '70%', 
        // borderWidth: 1, 
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#fff'
    },
    formBodyContainer: {
        width: '100%',
        height: 400,
        // backgroundColor: 'cyan',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center', 
    },
    formBodyGroup: {
        width: '90%',
        height: '100%',
        // backgroundColor: 'red',
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    formBodyItem: {
        width: '100%',
        height: 60,
        // backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    formFooter: {
        width: '100%',
        height: 80,
        // backgroundColor: 'pink',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    generatePasswordBtn: {
        width: '90%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3b3b98'
    },
});