import { useState } from "react";
import { View,Text, Modal, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'; 

export default function SelectDropdown(props){

    const [selected, setSelected] = useState();
    const [visibleModal,setVisibleModal] = useState(false);
    const {placeholder,optionKey,optionName,options,onSelect} = props;

    const _renderModalContent = () => (
        <View style={styles.centeredView}>
            <View style={styles.modalContent}>
                <ScrollView style={styles.selectOptions}>
                    <View style={{paddingVertical:5}}>
                        {options && options.map(option=>{
                            return (
                                <TouchableOpacity key={optionKey?option[optionKey]:option} style={styles.selectOption} onPress={()=>{
                                    setSelected(option);
                                    setVisibleModal(false);
                                    onSelect && onSelect(optionKey?option[optionKey]:option)
                                }}>
                                    <Text style={{fontSize:18}}> {optionName?option[optionName]:option}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </ScrollView>
                <TouchableOpacity style={styles.closeButton} onPress={()=>setVisibleModal(false)}>
                    <FontAwesome5 name={'times'} size={18} color="#022b64" />
                </TouchableOpacity>
            </View>
        </View>
    );

    const _renderSelected = () =>{
        if(selected){
           return <Text style={styles.inputStyle}>{optionName? selected[optionName] : selected }</Text>
        }
        return <Text style={styles.inputStyle}>{placeholder}</Text>
    }

    return (
        <View>
            <TouchableOpacity style={styles.inputcContainer} onPress={()=>setVisibleModal(true)}>
                {_renderSelected()}
                <View style={styles.iconContainer}>
                    <FontAwesome5 name={'angle-down'} size={18} color="#022b64" />
                </View>
            </TouchableOpacity>

            <Modal 
                visible={visibleModal}
                transparent={true}
                animationType="slide"
            >
                {_renderModalContent()}
            </Modal>
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
        width:'100%',
    },
    iconContainer: {
        paddingRight: 15,
    },
    selectOptions: {
        width:'100%',
        height:200,
    },
    selectOption: {
        width:'100%',
        padding: 10,
        alignItems:'center',
        borderTopWidth:1,
        borderBottomWidth:1,
        borderBottomColor:'#e7edeb',
        borderTopColor:'#e7edeb',
        marginTop:-1,
    },
    centeredView: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(0,0,0,.3)'
    },
    modalContent:{
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        width:300,
    },
    closeButton:{
        backgroundColor:'#ffffff',
        width:40,
        height:40,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'#dedede',
        position:'absolute',
        top:-20,
        right:-20
    }
});