import { useEffect, useState } from "react";
import { 
    View, 
    StyleSheet,
    Text,
    TouchableOpacity
} from "react-native";

import { getCities } from "../../api/AppApi";

import PublicHeader from "../../components/headers/PublicHeader";
import RadioInput from "../../components/Inputs/RadioInput";
import SelectDropdown from "../../components/Inputs/SelectDropdown";
import SubmitButton from "../../components/Inputs/SubmitButton";
import TextInputSimple from "../../components/Inputs/TextInputSimple";
import TextInputWithIcon from "../../components/Inputs/TextInputWithIcon";
import UploadAvatar from "../../components/Inputs/UploadAvatar";
import DeviceInfo from "../../constants/DeviceInfo";
import StaticData from "../../constants/StaticData";
import { ValidatePhone } from "../../validation/ValidateInputs";
import PublicScreensTemplate from "../templates/PublicScreensTemplate";

const { windowHeight } = DeviceInfo;

// const cities = StaticData.citiesObject;
// console.log(cities.length);
export default function RegisterScreen(props)
{  
    
    const { navigation:{ push, pop } } = props;
    const [gender, setGender] = useState(false);
    const [avatarUri, setAvatarUri] = useState(false);
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [birthYear,setBirthYear] = useState("");
    const [city, setCity] = useState("");
    const [cities,setCities] = useState([]);




    useEffect(()=>{
        getCities().then((res)=>{
            if(res.statusCode === 200) {
                setCities(res.data.cities);
            }else {
                alert("Check network connection");
            }
        });
    },[])

    const validateStep = () => {
        
    }



    const goTonextStep = () => {
        // let phoneValid = ValidatePhone(phone);
        // console.log(phoneValid);

        const userData = {
            gender,
            avatarUri,
            fullName,
            password,
            confirmPassword,
            phone,
            birthYear,
            city
        }

        push('ConfirmCode', userData);
    }
    
    return (
       <PublicScreensTemplate>

            <PublicHeader bg="variant_2">
               <UploadAvatar onPhotoUpload={({uri})=>setAvatarUri(uri)} />
            </PublicHeader>

            <View style={styles.body}>

                <TextInputSimple icon={'envelope'}  placeholder="Emer Mbiemer" value={fullName} onChangeText={setFullName}/>
                
                <TextInputWithIcon icon={'key'}  placeholder="Fjalekalimi" secureTextEntry value={password} onChangeText={setPassword}/>

                <TextInputWithIcon icon={'key'}  placeholder="Konfirmo Fjalekalimin" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword}/>

                <View style={{flexDirection:'row'}}>
                    <View style={{flex:2}}>
                        <TextInputSimple placeholder="Viti i lindjes"  keyboardType="numeric" maxLength={4} value={birthYear} onChangeText={setBirthYear} />
                    </View>
                    <View style={{flex:3}}>
                        <RadioInput onSelect={({selected})=>setGender(selected)} options={[{value:'M',label:'Mashkull'},{value:'F',label:'Femer'}]} label="Gjinia"/>
                    </View>
                </View>

                <TextInputSimple placeholder="Nr. Tel"  keyboardType="phone-pad" value={phone} onChangeText={setPhone} maxLength={14} />
               
                <SelectDropdown placeholder="Vendbanimi" options={cities} onSelect={setCity} />

                <SubmitButton onPress={goTonextStep} title="Vazhdo" iconRight="arrow-right"/>
            
                <TouchableOpacity style={{marginTop:30}} onPress={()=>pop()}>
                    <Text style={styles.loginText}>Keni nje llogari? <Text style={{fontWeight:'800'}}>Hyr</Text></Text>
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
        minHeight:windowHeight-250,
        // justifyContent:'center',
        // alignItems:'center'
    },
    loginText:{
        color:'#08c47d',
        textAlign:'center'
    }
    
  });
  