import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/auth/HomeScreen';
import TeamScreen from '../../screens/auth/TeamScreen';

const Tab = createBottomTabNavigator();

export default function AuthScreens(){
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Team" component={TeamScreen} />
        </Tab.Navigator>
    )
}