import { useContext, useState } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity
} from "react-native";
import { loginUser } from "../../api/AppApi";
import { saveToken, saveUser } from "../../api/StorageApi";

import PublicHeader from "../../components/headers/PublicHeader";
import SubmitButton from "../../components/Inputs/SubmitButton";
import TextInputWithIcon from "../../components/Inputs/TextInputWithIcon";
import DeviceInfo from "../../constants/DeviceInfo";
import { AuthContext } from "../../contexts/AuthContext";
import { validateEmail, validatePhone } from "../../validation/ValidateInputs";
import PublicScreensTemplate from "../templates/PublicScreensTemplate";

const { windowHeight } = DeviceInfo;

export default function LoginScreen(props)
{  
    const auth = useContext(AuthContext);

    const { navigation:{ push } } = props;

    const [phoneNumber, setPhoneNumebr] = useState("");
    const [password, setPassword] = useState("");

    const goToHome = async (response) => {
        if(response.statusCode === 200){
            const {accessToken,user} = response.data;
            auth.signIn({accessToken,user})
        }else{
            alert("Kontrolloni kredencialet!");
        }
    }

    const login = async () => {
        let isnum = /^\d+$/.test(phoneNumber);

        if(password === "" || phoneNumber === ""){
            alert("Plotesoni te gjitha fushat."); 
            return;
        }
        
        if(isnum){
            if(validatePhone(phoneNumber)){
                loginUser({
                    password,
                    phoneNumber 
                }).then(goToHome);
            }else{
                alert("Ju lutem vendosni nje numer Telefoni ose Email te sakte.");
            }
        }else{
            if(validateEmail(phoneNumber)){
                loginUser({
                    password,
                    email:phoneNumber 
                }).then(goToHome);
            }else{
                alert("Ju lutem vendosni nje numer Telefoni ose Email te sakte.");
            }
        }
    }

    return (
       <PublicScreensTemplate>

            <PublicHeader bg="variant_1" logoActive />

            <View style={styles.body}>
                
                <TextInputWithIcon icon={'envelope'} placeholder="Email / Tel" onChangeText={setPhoneNumebr} />

                <TextInputWithIcon icon={'key'} placeholder="Fjalekalimi" onChangeText={setPassword} secureTextEntry />

                <SubmitButton title="Hyr" onPress={login}/>

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
  