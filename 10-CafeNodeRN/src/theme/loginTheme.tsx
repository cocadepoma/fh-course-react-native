import { StyleSheet } from "react-native";

export const loginTheme = StyleSheet.create({
  formContainer: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
    height: 600,
    marginBottom: 120,
    elevation: 10,
  },
  formRegisterContainer: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
    height: 600,
    marginBottom: 50,
  },
  title: {
    color: '#F0C300',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  label: {
    marginTop: 25,
    color: '#F0C300',
    fontWeight: 'bold',
  },
  inputField: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 20,
  },
  inputFieldIOS: {
    borderBottomColor: '#F0C300',
    borderBottomWidth: 2,
    paddingBottom: 4,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    borderWidth: 2,
    borderColor: '#F0C300',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    top: -1
  },
  buttonText2: {
    fontSize: 13,
    color: '#F0C300',
  },
  buttonReturn: {
    position: 'absolute',
    top: 30,
    right: 10,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 100,
  },
  buttonReturn2: {
    position: 'absolute',
    top: 30,
    right: 10,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 100,
  },
  newUserContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
});