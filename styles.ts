import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F2F4F8',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1A1A2E',
  },

  inputRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E0E4EA',
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#fff',
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
    padding: 14,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    // small shadow so each task looks like a card
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
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
    backgroundColor: '#F2F4F8',
  },

  authTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1A1A2E',
  },

  authInput: {
    borderWidth: 1,
    borderColor: '#E0E4EA',
    borderRadius: 10,
    padding: 12,
    marginTop: 12,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#fff',
  },

  authButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
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
    borderRadius: 10,
    paddingVertical: 8,
    alignItems: 'center',
    marginRight: 8,
    backgroundColor: '#fff',
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

  // Small colored pill showing the task's priority
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },

  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },

  badgeText: {
    fontSize: 12,
    fontWeight: 'bold',
  },

  badgeLow: {
    backgroundColor: '#D9F2E3',
  },

  badgeTextLow: {
    color: '#1E7A44',
  },

  badgeMedium: {
    backgroundColor: '#FFF1D6',
  },

  badgeTextMedium: {
    color: '#B26A00',
  },

  badgeHigh: {
    backgroundColor: '#FFE0E0',
  },

  badgeTextHigh: {
    color: '#C62828',
  },
});