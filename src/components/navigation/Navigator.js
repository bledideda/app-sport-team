import { View,Text } from "react-native";
import AuthScreens from "./AuthScreens";
import PublicScreens from "./PublicScreens";

export default function MainNavigator(props){
   
    const { state } = props.state? props : { state:{ isLoading:true }};

    if (state.isLoading) {
        // We haven't finished checking for the token yet
        return <View><Text>SplashScreen</Text></View>;
    }

    if(state.userToken === null){
        return <PublicScreens />
    }
      
    return <AuthScreens />
}
