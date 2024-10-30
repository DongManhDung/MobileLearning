import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { TodoAtom } from './TodoAtom.js';
import { fetchTodosSelector } from './TodoSelector.js';
import { View, Text, Button, FlatList, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(TodoAtom);
  const fetchedTodos = useRecoilValue(fetchTodosSelector);
  const [newTodo, setNewTodo] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadTodos = async () => {
      setLoading(true);
      try {
        const response = await fetchedTodos; 
        setTodos(response);
      } catch (error) {
        console.error('Error fetching todos:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTodos();
  }, [setTodos, fetchedTodos]);

  const handleAddTodo = async () => {
    if (newTodo.trim()) {
      setLoading(true);
      try {
        const response = await axios.post("https://6721c90e98bbb4d93ca99dcf.mockapi.io/bai1/bai1", {
          title: newTodo,
        });
        setTodos((prev) => [...prev, response.data]); 
        setNewTodo('');
      } catch (error) {
        console.error('Error adding todo:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      <TextInput
        placeholder="Add a todo"
        value={newTodo}
        onChangeText={setNewTodo}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />

      {/* Add tạm vào mockAPI data bài 1 */}
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
              renderItem={({ item }) => <Text>{item.title}</Text>}
            />
          )}
      </View>
    </View>
  );
};

export default TodoList;