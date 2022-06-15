import { useEffect, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Platform } from 'react-native';
import AppNavigator from './src/components/navigation/Index';

export default function App() {
  const [state,setState] = useState({isLoading:false,userToken:null});

  useEffect(()=>{

    // setTimeout(()=>setState({isLoading:false,userToken:"null"}),5000);
  

  },[]);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <AppNavigator state={state} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
