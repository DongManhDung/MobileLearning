import react, {useState, useEffect} from 'react';
import { ActivityIndicator } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addTodo, fetchTodo, setLoading } from "./TodoSlice";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";


const Screen04_Admin = ({navigation}) => {

    const dispatch = useDispatch();
    const { todos, loading } = useSelector((state) => state.todos);
    const [newName, setNewName] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newImage, setNewImage] = useState('');
    const [newType, setNewType] = useState('');

    const callAddTodo = async () => {
        dispatch(setLoading(true)); 
        const res = await axios.post("https://6721d17998bbb4d93ca9c8eb.mockapi.io/api/v1/bicycle", {
            image: newImage,
            name: newName,
            price: newPrice,
            type: newType,
        });
        if(res && res.status===201){
            handleGetTodo();
        }
    }

    const handleAddTodo = () => {
        if (newName.trim() && newPrice.trim() && newImage.trim() && newType.trim()) {
            callAddTodo()
            setNewName('');
            setNewPrice('');
            setNewImage('');
            setNewType('');
        }
    }

    return (
        <View>
            <Text>Welcome to the hell!</Text>
        </View>
    );  
}

export default Screen04_Admin;  