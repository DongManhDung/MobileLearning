import { StyleSheet, Text, View, LogBox  } from 'react-native';
import { Provider } from 'react-redux';
import store from './store.js';
import {ToDoApp} from './ToDoApp.js';

LogBox.ignoreAllLogs();
export default function App() {
  return (
    <Provider store={store}>
      <ToDoApp />
    </Provider>
  );
}

const styles = StyleSheet.create({
  
});
