import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from "./Navigator";

export default function AppNavigator(props) {
    return (
        <NavigationContainer>
            <MainNavigator {...props}/>
        </NavigationContainer>
    )
}