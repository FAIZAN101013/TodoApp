import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },

  inputRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#000',
  },

  addButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginLeft: 8,
  },

  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  todoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  todoContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#007AFF',
    borderRadius: 6,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkboxCompleted: {
    backgroundColor: '#007AFF',
  },

  checkmark: {
    color: 'white',
    fontWeight: 'bold',
  },

  todoText: {
    fontSize: 17,
    flex: 1,
    color: '#000',
  },

  completedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },

  deleteText: {
    color: 'red',
    marginLeft: 10,
  },

  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    color: '#888',
    fontSize: 16,
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logoutText: {
    color: 'red',
  },

  authContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  authTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },

  authInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginTop: 12,
    fontSize: 16,
    color: '#000',
  },

  authButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },

  authButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  secondaryButton: {
    marginTop: 20,
    alignItems: 'center',
  },

  secondaryButtonText: {
    color: '#007AFF',
  },

  priorityRow: {
    flexDirection: 'row',
    marginTop: 12,
  },

  priorityButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
    marginRight: 8,
  },

  priorityButtonSelected: {
    backgroundColor: '#007AFF',
  },

  priorityButtonText: {
    color: '#007AFF',
  },

  priorityButtonTextSelected: {
    color: 'white',
    fontWeight: 'bold',
  },

  taskList: {
    marginTop: 20,
  },

  todoTextArea: {
    flex: 1,
  },

  todoMeta: {
    fontSize: 13,
    color: '#888',
    marginTop: 2,
  },
});