import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { RecoilRoot } from 'recoil';
import TodoList from './TodoList';

export default function App() {
  return (
    <RecoilRoot>
      <TodoList/>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  
});
