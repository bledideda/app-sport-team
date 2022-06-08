import { StyleSheet, TouchableOpacity,Text } from "react-native";

export default function SubmitButton(props){
    const {title} = props;
    return (
        <TouchableOpacity style={styles.inputcContainer}>
            <Text style={styles.buttonText}>{title}</Text>
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
      maxWidth:320,
  
    },
    buttonText: {
        color: '#fff',
        textAlign:'center',
        width:'100%'
    }
});