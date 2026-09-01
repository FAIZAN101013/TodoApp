import React, {useEffect, useState} from 'react';

import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';

import {
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import {RootStackParamList} from '../App';
import {styles} from '../styles';
import {apiRequest, setToken} from '../api';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

// What a task looks like when it comes back from the backend.
// "_id" is the id MongoDB gives every document.
type Task = {
  _id: string;
  title: string;
  description: string;
  deadline: string;
  priority: 'Low' | 'Medium' | 'High';
  completed: boolean;
  createdAt: string;
};

const PRIORITIES: Array<Task['priority']> = ['Low', 'Medium', 'High'];

function HomeScreen({navigation}: Props) {
  // The form fields for a new task
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState<Task['priority']>('Medium');

  // The list of tasks from the server
  const [tasks, setTasks] = useState<Task[]>([]);

  // Ask the backend for this user's tasks
  const loadTasks = async () => {
    try {
      const data = await apiRequest('/tasks');
      setTasks(data);
    } catch (error: any) {
      Alert.alert('Could not load tasks', error.message);
    }
  };

  // Runs once when the screen first opens
  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async () => {
    if (!title.trim()) {
      return;
    }

    try {
      const newTask = await apiRequest('/tasks', 'POST', {
        title: title,
        description: description,
        deadline: deadline,
        priority: priority,
      });

      // Put the new task at the top of the list
      setTasks(prev => [newTask, ...prev]);

      // Clear the form
      setTitle('');
      setDescription('');
      setDeadline('');
      setPriority('Medium');
    } catch (error: any) {
      Alert.alert('Could not add task', error.message);
    }
  };

  const toggleTask = async (task: Task) => {
    try {
      const updated = await apiRequest('/tasks/' + task._id, 'PUT', {
        completed: !task.completed,
      });

      // Replace the old version of this task with the updated one
      setTasks(prev =>
        prev.map(t => (t._id === updated._id ? updated : t)),
      );
    } catch (error: any) {
      Alert.alert('Could not update task', error.message);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await apiRequest('/tasks/' + id, 'DELETE');

      setTasks(prev => prev.filter(t => t._id !== id));
    } catch (error: any) {
      Alert.alert('Could not delete task', error.message);
    }
  };

  const logout = () => {
    setToken(''); // forget the login token
    navigation.replace('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>My Todo List</Text>

        <TouchableOpacity onPress={logout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* New task form */}
      <TextInput
        placeholder="Task title"
        placeholderTextColor="#888"
        value={title}
        onChangeText={setTitle}
        style={styles.authInput}
      />

      <TextInput
        placeholder="Description (optional)"
        placeholderTextColor="#888"
        value={description}
        onChangeText={setDescription}
        style={styles.authInput}
      />

      <TextInput
        placeholder="Deadline e.g. 2026-09-05 18:00 (optional)"
        placeholderTextColor="#888"
        value={deadline}
        onChangeText={setDeadline}
        style={styles.authInput}
      />

      {/* Priority selector: three small buttons */}
      <View style={styles.priorityRow}>
        {PRIORITIES.map(p => (
          <TouchableOpacity
            key={p}
            onPress={() => setPriority(p)}
            style={[
              styles.priorityButton,
              priority === p && styles.priorityButtonSelected,
            ]}>
            <Text
              style={[
                styles.priorityButtonText,
                priority === p && styles.priorityButtonTextSelected,
              ]}>
              {p}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity onPress={addTask} style={styles.authButton}>
        <Text style={styles.authButtonText}>Add Task</Text>
      </TouchableOpacity>

      {/* Task list */}
      <FlatList
        data={tasks}
        keyExtractor={item => item._id}
        style={styles.taskList}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No tasks yet.</Text>
        }
        renderItem={({item}) => (
          <View style={styles.todoRow}>
            <TouchableOpacity
              onPress={() => toggleTask(item)}
              style={styles.todoContent}>
              <View
                style={[
                  styles.checkbox,
                  item.completed && styles.checkboxCompleted,
                ]}>
                {item.completed && (
                  <Text style={styles.checkmark}>✓</Text>
                )}
              </View>

              <View style={styles.todoTextArea}>
                <Text
                  style={[
                    styles.todoText,
                    item.completed && styles.completedText,
                  ]}>
                  {item.title}
                </Text>

                {item.description ? (
                  <Text style={styles.todoMeta}>{item.description}</Text>
                ) : null}

                <Text style={styles.todoMeta}>
                  {item.deadline ? 'Due: ' + item.deadline + '  •  ' : ''}
                  Priority: {item.priority}
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => deleteTask(item._id)}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
