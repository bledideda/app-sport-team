import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity
} from "react-native";

import PublicHeader from "../../components/headers/PublicHeader";
import SubmitButton from "../../components/Inputs/SubmitButton";
import TextInputWithIcon from "../../components/Inputs/TextInputWithIcon";
import DeviceInfo from "../../constants/DeviceInfo";
import PublicScreensTemplate from "../templates/PublicScreensTemplate";

const { windowHeight } = DeviceInfo;

export default function LoginScreen(props)
{  
    
    const { navigation:{ push } } = props;
   
    return (
       <PublicScreensTemplate>

            <PublicHeader bg="variant_1" logoActive />

            <View style={styles.body}>
                
                <TextInputWithIcon icon={'envelope'}  placeholder="Email / Tel" keyboardType="email-address" />

                <TextInputWithIcon icon={'key'}  placeholder="Fjalekalimi" secureTextEntry />

                <SubmitButton title="Hyr"/>

                <TouchableOpacity>
                    <Text style={styles.loginText}>Keni harruar fjalekalimin?</Text>
                </TouchableOpacity>
            
                <TouchableOpacity style={{marginTop:100}} onPress={()=>push('Register')}>
                    <Text style={styles.loginText}>Nuk keni nje llogari? <Text style={{fontWeight:'800'}}>Rregjistrohu</Text></Text>
                </TouchableOpacity>
                
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
  