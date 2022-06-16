


import { useState } from "react";
import { 
    View, 
    StyleSheet,
    Text,
    TouchableOpacity
} from "react-native";
import PublicHeader from "../../components/headers/PublicHeader";
import AppIcon from "../../components/icons/AppIcon";
import SubmitButton from "../../components/Inputs/SubmitButton";
import UploadAvatar from "../../components/Inputs/UploadAvatar";
import DeviceInfo from "../../constants/DeviceInfo";
import StaticData from "../../constants/StaticData";
import PublicScreensTemplate from "../templates/PublicScreensTemplate";

const { windowHeight } = DeviceInfo;


function SportPositionSelector({sport,dropdownOpen}){
    const [isOpen,setIsOpen] = useState(dropdownOpen);
    return (
        <View style={styles.positionSelector}>
            <TouchableOpacity style={styles.positionSelectorDropdown} onPress={()=>setIsOpen(!isOpen)}>
                <Text style={styles.sportName}>{sport.name}</Text>
                {isOpen ? 
                    <AppIcon name="arrowUp" style={styles.arrowIndicator}/>
                :
                    <AppIcon name="arrowDown" style={styles.arrowIndicator}/>
                }
                
                
            </TouchableOpacity>
            {isOpen && <View style={styles.dropdownField}>
                        <Text>DROPWDOWN IS OPEN</Text>
                </View>}
        </View>
        
    )
}

export default function SelectPositionsScreen(props)
{

    const {route, navigation} = props;
    const { selectedSports } = route.params;

    console.log(selectedSports);

    // const [selectedSports, setSelectedSports] = useState([]);
    // const [selectedSportIds,setSelectedSportIds] = useState([]);

    const goTonextStep = () => {
        alert('REGISTER');
        // if(selectedSports.length){
        //     return;
        // }
        // alert('Ju lutem zgjidhni nje sport !')
    }

    const _renderSelector = (sport,index) => <SportPositionSelector key={(index+1).toString()} sport={sport} dropdownOpen={index == 0} />

    const _renderSportPostionSelectors = () => {
        return selectedSports.map(_renderSelector);
    }

    return (
        <PublicScreensTemplate>

             <PublicHeader bg="variant_2">
                <UploadAvatar />
             </PublicHeader>

             <View style={styles.body}>
                <Text style={{marginBottom:15,width:'100%'}}>Plotesoni te dhenat per sportet perkatese.</Text>
               
              

                
                <View style={{flexDirection:'row',flexWrap:'wrap'}}>

                {_renderSportPostionSelectors()}

                </View>

                <SubmitButton onPress={goTonextStep} title="Vazhdo" iconRight="arrow-right"/>


             </View>
             
        </PublicScreensTemplate>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    body: {
        padding: 30,
        backgroundColor:'#ffffff',
        minHeight:windowHeight-250,
        alignItems:'center'
    },
    loginText:{
        color:'#08c47d',
        textAlign:'center'
    },
    bulletSelect: {
        width: (100/3)+'%',
        // backgroundColor:'red',
        padding: 5,
    },
    bulletTimes:{
        backgroundColor:'#E6EDEA',
        borderRadius:20,
        paddingVertical:10,
        paddingHorizontal:10,
        flexDirection:'row'
    },
    timesButton:{
        width: 30,
        height: 35,
        // backgroundColor:'blue',
        position:'absolute',
        right:0,
        top: 0,
        alignItems:'flex-end',
        justifyContent:'center',
        paddingRight:10,
    },



    positionSelector:{
        width: '100%',
        marginBottom:10,
    },
    positionSelectorDropdown:{
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor:'#E6EDEA',
        borderRadius:20,
        zIndex:6,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    sportName:{
        fontSize:16,
        fontWeight:'500',
    },
    dropdownField:{
        borderWidth:1,
        height:200,
        borderTopWidth:0,
        borderRadius:10,
        borderColor:'#E6EDEA',
        padding:15,
        paddingTop:15+25,
        marginTop:-25,
        zIndex:5,
    },
    arrowIndicator: {
        height:15,
        // backgroundColor:'red',
        width:20,
    }
 });