


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

export default function SelectSportsScreen(props)
{

    const {route, navigation} = props;
    const { phone } = route.params;


    const [selectedSports, setSelectedSports] = useState([]);
    const [selectedSportIds,setSelectedSportIds]=useState([]);

    console.log(phone);

    const goTonextStep = () => {
        push('SelectSports', route.params);
    }

   const selectSport = (sport) => {
        if(!selectedSportIds.includes(sport.id)){
            setSelectedSportIds([...selectedSportIds,sport.id]);
            setSelectedSports([...selectedSports,sport]);
        }
    }


    const _renderSport  = (sport) => {
      
        let isSelected = selectedSportIds.includes(sport.id);
        let opacity = isSelected ? 1 : 0.5;
        if(isSelected){
            return  (
                <View key={sport.id.toString()} style={{
                    width:'50%',
                    alignContent:'center',
                    justifyContent:'center',
                    marginBottom:30
                }}
                onPress={()=>selectSport(sport)}
                >
                    <AppIcon name={sport.icon} style={{width:'100%',height:90}} />
                    <Text style={{textAlign:'center'}}>{sport.name}</Text>
                </View>
            )
        }

        return  (
            <TouchableOpacity key={sport.id.toString()} style={{
                width:'50%',
                alignContent:'center',
                justifyContent:'center',
                marginBottom:30,
                opacity:0.5
            }}
            onPress={()=>selectSport(sport)}
            >
                <AppIcon name={sport.icon} style={{width:'100%',height:90}} />
                <Text style={{textAlign:'center'}}>{sport.name}</Text>
            </TouchableOpacity>
        )
      
    }

    const _renderSports = () => {
        console.log('render');
        return selectedSportIds && StaticData.sports.map((sport)=>_renderSport(sport));
        
    }
    console.log('render all');
    return (
        <PublicScreensTemplate>

             <PublicHeader bg="variant_2">
                <UploadAvatar />
             </PublicHeader>

             <View style={styles.body}>
              

                <Text style={{marginBottom:15,width:'100%'}}>Zgjidhni sportet tuaja</Text>
        
                {
                    selectedSports.map((sport)=>{
                        return (<View key={sport.id}><Text>{sport.name}</Text></View>)
                    })
                }

                
                <View style={{flexDirection:'row',flexWrap:'wrap'}}>

                {_renderSports()}

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
    }
    
 });