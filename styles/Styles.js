import { StyleSheet } from 'react-native';

const lightTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0989f',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    width: '80%',
    fontSize: 18,
    backgroundColor: '#fff',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    fontWeight: 'bold',
    color: '#fff',
  },
  minusButton: {
    backgroundColor: '#614e52', 
    margin: 10,
  },
  plusButton: {
    backgroundColor: '#a1646e', 
    margin: 10,
  },
  labelText: {
    fontSize: 20,
    color: '#333',
  },
  optionText: {
    fontSize: 20,
    color: '#333',
  },
  selected: {
    fontSize: 20,
    marginLeft: 10,
    color: '#b63349',
    padding: 10
  },
  safeResult: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'green', 
  },
  warningResult: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'yellow', 
  },
  errorResult: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'red', 
  },
  calculateButton: {
    backgroundColor: '#a1646e', 
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  calculateButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', 
  },
  themeText:{
    color: 'black'
  },
});

const darkTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3e1d24', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    color: '#eee', 
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    width: '80%',
    fontSize: 18,
    backgroundColor: '#664850', 
    color: '#eee', 
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    fontSize: 20,
    backgroundColor: '#3b5f5a',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    fontWeight: 'bold',
    color: '#fff', 
  },
  minusButton: {
    backgroundColor: '#564a4a', 
    margin: 10,
  },
  plusButton: {
    backgroundColor: '#8b3146', 
    margin: 10,
  },
  labelText: {
    fontSize: 20,
    color: '#eee', 
  },
  optionText: {
    fontSize: 20,
    color: '#eee', 
  },
  selected: {
    fontSize: 20,
    marginLeft: 10,
    color: '#b8536a', 
    padding: 10
  },
  safeResult: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'green', 
  },
  warningResult: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'yellow', 
  },
  errorResult: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'red', 
  },
  calculateButton: {
    backgroundColor: '#8b3146', 
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  calculateButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', 
    textAlign: 'center',
  },
  themeText:{
    color: 'white'
  },
});

export { lightTheme, darkTheme };