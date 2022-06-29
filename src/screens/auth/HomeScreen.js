import { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { deleteStoredAuthData } from "../../api/StorageApi";
import { AuthContext } from "../../contexts/AuthContext";

export default function HomeScreen(props)
{  
    const auth = useContext(AuthContext);
    const logOut = () => {
        auth.signOut();
    }

    return (
        <View {...props}>
            <Text>This is the HomeScreen of the app</Text>
            <TouchableOpacity style={{padding:30,backgroundColor:'#dedede'}} onPress={logOut}>
                <Text>LOGOUT</Text>
            </TouchableOpacity>
        </View>
    )
}