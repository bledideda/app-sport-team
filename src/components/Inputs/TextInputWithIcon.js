import { TextInput, View, StyleSheet,Text } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'; 

export default function TextInputWithIcon(props){

    const { icon } = props;

    return (
        <View style={styles.inputcContainer}>
            <View style={styles.iconContainer}><FontAwesome5 name={icon} size={18} color="#022b64" /></View>
            <TextInput {...props} style={styles.inputStyle}></TextInput>
        </View>
    )
}


const styles = StyleSheet.create({
    inputcContainer: {
      flexDirection:'row',
      height: 44,
      backgroundColor:'#e7edeb',
      borderRadius: 22,
      paddingLeft:22,
      paddingRight:10,
      alignItems:'center',
      marginBottom:30,
      maxWidth:600,
      borderWidth:1.5,
      borderColor:'#dce1dd'
    },
    inputStyle: {
        flex:1,
        // backgroundColor:'red',
        width:'100%',
        height:'100%'
    },
    iconContainer: {
        paddingRight: 15,
        // backgroundColor:'blue'
    }
});