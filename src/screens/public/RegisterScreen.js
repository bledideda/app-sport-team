import { useState } from "react";
import { 
    View, 
    StyleSheet
} from "react-native";

import PublicHeader from "../../components/headers/PublicHeader";
import RadioInput from "../../components/Inputs/RadioInput";
import SubmitButton from "../../components/Inputs/SubmitButton";
import TextInputSimple from "../../components/Inputs/TextInputSimple";
import TextInputWithIcon from "../../components/Inputs/TextInputWithIcon";
import UploadAvatar from "../../components/Inputs/UploadAvatar";
import DeviceInfo from "../../constants/DeviceInfo";
import PublicScreensTemplate from "../templates/PublicScreensTemplate";

const { windowHeight } = DeviceInfo;

export default function RegisterScreen(props)
{  
    
    const { navigation:{ push } } = props;
    const [gender, setGender] = useState(false);
   
    return (
       <PublicScreensTemplate>

            <PublicHeader bg="variant_2">
               <UploadAvatar />
            </PublicHeader>

            <View style={styles.body}>

                <TextInputSimple icon={'envelope'}  placeholder="Emer Mbiemer"/>
                
                <TextInputWithIcon icon={'key'}  placeholder="Fjalekalimi" secureTextEntry />


                <TextInputWithIcon icon={'key'}  placeholder="Konfirmo Fjalekalimin" secureTextEntry />

                <View style={{flexDirection:'row'}}>
                    <View style={{flex:2}}>
                        <TextInputSimple placeholder="Viti i lindjes"  keyboardType="numeric" />
                    </View>
                    <View style={{flex:3}}>
                        <RadioInput onSelect={({selected})=>setGender(selected)} options={[{value:'M',label:'Mashkull'},{value:'F',label:'Femer'}]} label="Gjinia"/>
                    </View>
                </View>

                <TextInputSimple placeholder="Nr. Tel"  keyboardType="numeric" />
               

                <SubmitButton title="Rregjistrohu"/>


                {/* <TouchableOpacity>
                    <Text style={styles.loginText}>Keni harruar fjalekalimin?</Text>
                </TouchableOpacity>
            
                <TouchableOpacity style={{marginTop:100}} onPress={()=>push('Register')}>
                    <Text style={styles.loginText}>Nuk keni nje llogari? <Text style={{fontWeight:'800'}}>Rregjistrohu</Text></Text>
                </TouchableOpacity> */}
                
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
        height: windowHeight-250,
    },
    loginText:{
        color:'#08c47d',
        textAlign:'center'
    }
    
  });
  