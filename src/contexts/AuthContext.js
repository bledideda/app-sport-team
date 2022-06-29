import * as React from 'react';
import { saveToken, saveUser } from '../api/StorageApi';
// CONTEXT NAME
export const AuthContext = React.createContext();
// REDUCERS
export function authReducers() {
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
          switch (action.type) {
            case 'SIGN_IN':
              return {
                ...prevState,
                userToken: action.token,
                user:action.user,
              };
            case 'SIGN_OUT':
              return {
                ...prevState,
                userToken: null,
              };
          }
        },
        {
          userToken: null,
          user:null
        }
    );
    
    return {state, dispatch}
}
// CONTEXT VALUE
export function authContextValue(dispatch){

      const authContext = React.useMemo(
        () => ({
          signIn: async ({accessToken,user}) => {
            // In a production app, we need to send some data (usually username, password) to server and get a token
            // We will also need to handle errors if sign in failed
            // After getting token, we need to persist the token using `SecureStore`
            // In the example, we'll use a dummy token
            await saveToken(accessToken);
            await saveUser(user);
            dispatch({ type: 'SIGN_IN', token: accessToken, user: user });
          },
          signOut: () => dispatch({ type: 'SIGN_OUT' }),
          signUp: async (data) => {
            // In a production app, we need to send user data to server and get a token
            // We will also need to handle errors if sign up failed
            // After getting token, we need to persist the token using `SecureStore`
            // In the example, we'll use a dummy token
    
            dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
          },
        }),
        []
      );

      return authContext;
}


//   export const AuthContext;