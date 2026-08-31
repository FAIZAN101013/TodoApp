import React ,  { useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';

type Todo= {
  id:string; //every todo will have a unique id
  title:string;//title of the todo
  completed:boolean;//whether the todo is completed or not
}

const [task, setTask] = useState(''); //state to hold the current task input
const [todos,setTodos]= useState<Todo[]>([]); //state to hold the list of todos

const addTodo = () => {
 if(!task.trim()){
      return; //if the task is empty, do not add it
 }

 const newTodo: Todo = {
  id: Date.now().toString(), //generate a unique id based on the current timestamp
  title: task.trim(), //trim the task to remove any leading or trailing whitespace
  completed: false, //new todos are not completed by default
}

setTodos(pre => [newTodo, ...pre]) //add the new todo to the beginning of the todos array
setTask(''); //clear the input field after adding the todo
};


