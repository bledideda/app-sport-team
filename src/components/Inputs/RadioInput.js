import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome  from '@expo/vector-icons/FontAwesome'; 
import { useState } from "react";
export default function RadioInput(props) {

    const { options, label, onSelect } = props;

    const [selectedValue, setSelectedValue] = useState(false);

    const selecteValue = (value) => {
        setSelectedValue(value);
        onSelect && onSelect({selected:value});
    }

    return (
        <View style={styles.inputContainer}>
            <Text  style={{color:'#939CA7'}}>{label}</Text>
            {options.map(opt=>(
                <TouchableOpacity key={opt.value} style={{flexDirection:'row'}} onPress={()=>selecteValue(opt.value)}>
                    {selectedValue && selectedValue === opt.value ?
                        <FontAwesome name="circle" size={18} color="#022b64" />
                    :
                        <FontAwesome name="circle-o" size={18} color="#022b64" />
                    }
                    <Text style={{color:'#022b64'}}>{opt.label}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        height: 44,
        alignItems:'center',
        padding: 5,
    }
})