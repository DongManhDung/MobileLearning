import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, setLoading, fetchTodo } from './TodoSlice';
import { View, Text, Button, FlatList, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';

const TodoList = () => {
    const dispatch = useDispatch();
    const { todos, loading } = useSelector((state) => state.todos);
    const [newTodo, setNewTodo] = useState('');

    const handleGetTodo = async () => {
        dispatch(setLoading(true)); 
        try {
            const res = await axios.get("https://6721c90e98bbb4d93ca99dcf.mockapi.io/bai1/todo");
            if (res && res.status === 200) {
                dispatch(fetchTodo(res.data)); 
            }
        } catch (error) {
            console.error('Error fetching todos:', error);
        } finally {
            dispatch(setLoading(false)); 
        }
    };
    const callAddTodo = async ()=>{
        dispatch(setLoading(true)); 
        const res = await axios.post("https://6721c90e98bbb4d93ca99dcf.mockapi.io/bai1/todo", {
            title: newTodo, 
        });
        if(res && res.status===201){
            handleGetTodo();
        }
    }
    const handleAddTodo = () => {
        if (newTodo.trim()) {
            callAddTodo()
            setNewTodo('');
        }
    };
    useEffect(() => {
        handleGetTodo();
    }, []);

    
    return (
        <View style={{ padding: 20, marginTop: 40 }}>
            <TextInput
                placeholder="Add new title here..."
                value={newTodo}
                onChangeText={setNewTodo}
                style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
            />

            <TouchableOpacity onPress={handleAddTodo} 
            style={{width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lime', borderRadius: 10, marginTop: 10}}
            >
            <Text>Add new title</Text>
            </TouchableOpacity>

            <View style={{width: '100%', marginTop: 20}}>
                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <FlatList
                    data={todos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <Text style={{borderWidth: 1, padding: 10, marginTop: 10, borderRadius: 10}}>{item.title}</Text>}
                    />
                )}
             </View>
        </View>
    );
};

export default TodoList;