import React, {useState} from 'react';

import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';

import {styles} from './styles';

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    if (!task.trim()) {
      return;
    }

    const newTodo: Todo = {
      id: Date.now().toString(),
      title: task.trim(),
      completed: false,
    };

    setTodos(prev => [newTodo, ...prev]);
    setTask('');
  };

  const toggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? {...todo, completed: !todo.completed}
          : todo,
      ),
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Todo List</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task..."
          value={task}
          onChangeText={setTask}
          onSubmitEditing={addTodo}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={addTodo}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No tasks yet.
          </Text>
        }
        renderItem={({item}) => (
          <View style={styles.todoRow}>
            <TouchableOpacity
              style={styles.todoContent}
              onPress={() => toggleTodo(item.id)}>
              
              <View
                style={[
                  styles.checkbox,
                  item.completed && styles.checkboxCompleted,
                ]}>
                {item.completed && (
                  <Text style={styles.checkmark}>✓</Text>
                )}
              </View>

              <Text
                style={[
                  styles.todoText,
                  item.completed && styles.completedText,
                ]}>
                {item.title}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => deleteTodo(item.id)}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

export default App;