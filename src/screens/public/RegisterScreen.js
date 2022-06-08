import { useState } from "react";
import { 
    View, 
    StyleSheet,
    Text
} from "react-native";

import PublicHeader from "../../components/headers/PublicHeader";
import RadioInput from "../../components/Inputs/RadioInput";
import SelectDropdown from "../../components/Inputs/SelectDropdown";
import SubmitButton from "../../components/Inputs/SubmitButton";
import TextInputSimple from "../../components/Inputs/TextInputSimple";
import TextInputWithIcon from "../../components/Inputs/TextInputWithIcon";
import UploadAvatar from "../../components/Inputs/UploadAvatar";
import DeviceInfo from "../../constants/DeviceInfo";
import PublicScreensTemplate from "../templates/PublicScreensTemplate";

const { windowHeight } = DeviceInfo;


const cities = [
    {id:"1",name:"Tirane"}, 
    {id:"2",name:"Durres"},
    {id:"5",name:"Elbasan"},
    {id:"3",name:"Berat"}, 
    {id:"4",name:"Peshkopi"},
    {id:"6",name:"Sarande"},
    {id:"7",name:"Vlore"},
    {id:"8",name:"Kukes"},
    {id:"9",name:"Mirdite"},
    {id:"10",name:"Kavaje"},
];

export default function RegisterScreen(props)
{  
    
    const { navigation:{ push } } = props;
    const [gender, setGender] = useState(false);
    const [avatarUri, setAvatarUri] = useState(false);
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");
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
                        <TextInputSimple placeholder="Viti i lindjes"  keyboardType="numeric" maxLength={4} />
                    </View>
                    <View style={{flex:3}}>
                        <RadioInput onSelect={({selected})=>setGender(selected)} options={[{value:'M',label:'Mashkull'},{value:'F',label:'Femer'}]} label="Gjinia"/>
                    </View>
                </View>

                <TextInputSimple placeholder="Nr. Tel"  keyboardType="phone-pad" value={phone} onChangeText={setPhone} maxLength={14} />
               
                <SelectDropdown placeholder="Vendbanimi" options={cities} optionKey={'id'} optionName={'name'} />

                <SubmitButton title="Vazhdo"/>


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
        minHeight:windowHeight-250,
        // justifyContent:'center',
        // alignItems:'center'
    },
    loginText:{
        color:'#08c47d',
        textAlign:'center'
    }
    
  });
  