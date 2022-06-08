import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/public/LoginScreen';
import RegisterScreen from '../../screens/public/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function PublicScreens(){
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} options={{header:()=>null}}/>
            <Stack.Screen name="Register" component={RegisterScreen} options={{header:()=>null}} />
        </Stack.Navigator>
    )
}