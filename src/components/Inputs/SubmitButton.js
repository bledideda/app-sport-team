import { StyleSheet, TouchableOpacity,Text } from "react-native";
import FontAwesome5  from '@expo/vector-icons/FontAwesome5'; 
export default function SubmitButton(props){
    const {title, iconRight, iconLeft,onPress } = props;
    return (
        <TouchableOpacity style={styles.inputcContainer} onPress={onPress}>
            {iconLeft && <FontAwesome5 name={iconLeft} size={18} color="#ffffff" style={[styles.icon,styles.iconLeft]}/>}
            <Text style={styles.buttonText}>{title}</Text>
            {iconRight && <FontAwesome5 name={iconRight} size={18} color="#ffffff" style={[styles.icon,styles.iconRight]}/>}
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    inputcContainer: {
      flexDirection:'row',
      height: 44,
      backgroundColor:'#939CA7',
      borderRadius: 22,
      paddingLeft:22,
      paddingRight:10,
      alignItems:'center',
      marginBottom:30,
      maxWidth:600,
  
    },
    buttonText: {
        color: '#fff',
        textAlign:'center',
        width:'100%'
    },
    icon:{position:'absolute'},
    iconLeft:{left:15},
    iconRight:{right:15}
});