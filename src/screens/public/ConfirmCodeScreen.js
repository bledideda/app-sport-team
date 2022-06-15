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
import TextInputSimple from "../../components/Inputs/TextInputSimple";
import UploadAvatar from "../../components/Inputs/UploadAvatar";
import DeviceInfo from "../../constants/DeviceInfo";
import StaticData from "../../constants/StaticData";
import PublicScreensTemplate from "../templates/PublicScreensTemplate";

const { windowHeight } = DeviceInfo;

const cities = StaticData.citiesObject;

export default function ConfirmCodeScreen(props)
{  
    const {route, navigation:{push}} = props;
    const { phone } = route.params;
    const [confirmCode, setConfirmCode] = useState("");

    console.log(phone);

    const goTonextStep = () => {
        push('SelectSports', route.params);
    }

    return (
        <PublicScreensTemplate>
 
             <PublicHeader bg="variant_2">
                <UploadAvatar />
             </PublicHeader>

             <View style={styles.body}>
                <AppIcon name={'sms'} style={{width:80,height:80}} />

                <Text style={{marginBottom:15,marginTop:30}}>Ju lutem vendosni kodin që keni marrë me SMS</Text>
                  
                <TextInputSimple 
                    style={{fontSize:30, letterSpacing:6,textAlign:'center'}}  
                    height={60} 
                    borderRadius={30} 
                    placeholder="- - - - - -"  
                    keyboardType="numeric" 
                    maxLength={6} 
                    value={confirmCode} 
                    onChangeText={setConfirmCode}
                />

                <TouchableOpacity style={{marginTop:0,marginBottom:50}} onPress={()=>alert('Kodi u dergua serisht. Kontrollo mesazhet!')}>
                    <Text style={styles.loginText}>Nuk ju ka ardhur? <Text style={{fontWeight:'800'}}>Dergo Serisht</Text></Text>
                </TouchableOpacity>

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