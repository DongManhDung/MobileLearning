import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { RecoilRoot } from 'recoil';
import TodoList from './TodoList.js';

export default function App() {
  return (
    <RecoilRoot>
      <TodoList/>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  
});
