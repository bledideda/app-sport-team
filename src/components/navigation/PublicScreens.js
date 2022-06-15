import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConfirmCodeScreen from '../../screens/public/ConfirmCodeScreen';
import LoginScreen from '../../screens/public/LoginScreen';
import RegisterScreen from '../../screens/public/RegisterScreen';
import SelectSportsScreen from '../../screens/public/SelectSportsScreen';

const Stack = createNativeStackNavigator();

export default function PublicScreens(){
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} options={{header:()=>null}}/>
            <Stack.Screen name="Register" component={RegisterScreen} options={{header:()=>null}} />
            <Stack.Screen name="ConfirmCode" component={ConfirmCodeScreen} options={{header:()=>null}} />
            <Stack.Screen name="SelectSports" component={SelectSportsScreen} options={{header:()=>null}} />
        </Stack.Navigator>
    )
}