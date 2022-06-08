import { 
    View, 
    StyleSheet, 
    TouchableWithoutFeedback, 
    Keyboard, 
    ScrollView, 
} from "react-native";

import DeviceInfo from "../../constants/DeviceInfo";

const { windowHeight } = DeviceInfo;

export default function PublicScreensTemplate(props)
{  
    const { children } = props;
   
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView style={{backgroundColor:'#2fcc8e'}} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    {children}
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
      
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    body: {
        padding: 30,
        backgroundColor:'#ffffff',
        height: windowHeight-250,
    },
  });
  