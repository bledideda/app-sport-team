import * as React from 'react';
import { KeyboardAvoidingView, StyleSheet, Platform } from 'react-native';
import AppNavigator from './src/components/navigation/Index';
import { AuthContext, authContextValue, authReducers } from './src/contexts/AuthContext';


export default function App() {

  const { state, dispatch } = authReducers();
  
  return (
    <AuthContext.Provider value={authContextValue(dispatch)}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        <AppNavigator state={state} />
      </KeyboardAvoidingView>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
