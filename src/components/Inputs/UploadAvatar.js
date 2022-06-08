import { useState } from "react";
import { Image, TouchableOpacity, View, Alert  } from "react-native";
import EditAvatar from "../../../assets/editavatar.png";
import FontAwesome  from '@expo/vector-icons/FontAwesome'; 
import * as ImagePicker from 'expo-image-picker';


export default function UploadAvatar(props) {
    const [image, setImage] = useState(false);
    const [statusGallery, requestPermissionGallery] = ImagePicker.useMediaLibraryPermissions();
    const [statusCamera, requestPermissionCamera] = ImagePicker.useCameraPermissions();
    const { onPhotoUpload } = props;


    const lounchImage = async (type) => {

        let result = {cancelled:true, uri:null};

        if(type === 'galery'){
            result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1
            });
        }else {
            result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1
            });
        }

        if (!result.cancelled) {
            setImage(result.uri);
            if(onPhotoUpload){
                onPhotoUpload({uri:result.uri})
            }
        }
    }

    const pickImage = async () => {
        if(!statusGallery.granted){
            if(statusGallery.canAskAgain){
                requestPermissionGallery().then((res)=>{
                    if(res.granted){
                        lounchImage('galery')
                    }
                });
            }else{
               alert('Ky Aplikacion ka nevoje per leje per te hapur Galerine. Ju lutem kontrolloni Settings per te lejuar akses.');
            }
        }else{
            lounchImage('galery')
        }
    };

    const openCamera = async () => {
        if(!statusCamera.granted){
            if(statusCamera.canAskAgain){
                requestPermissionCamera().then((res)=>{
                    if(res.granted){
                        lounchImage('camera')
                    }
                });
            }else{
                alert('Ky Aplikacion ka nevoje per leje per te hapur Kameren. Ju lutem kontrolloni Settings per te lejuar akses.');
            }
        }else{
            lounchImage('camera')
        }
    }

    const uploadImage = () => {
        Alert.alert('Perzgjidhni foto Profili', 'Ngarkoni foto nga Galeria apo Kamera?', [
            {
              text: 'Anullo',
              style: 'cancel',
            },
            { text: 'Galeri', onPress: () => pickImage() },
            { text: 'Kamera', onPress: () => openCamera() },
        ]);
    }

    return (
        <TouchableOpacity onPress={uploadImage}>
            <Image 
                source={image? { uri: image} : EditAvatar}
                style={{resizeMode:'cover', width:100, height:100,borderRadius:50,borderWidth:2, borderColor:'#ffffff'}}
            />
            <View style={{
                width:30,
                height:30,
                backgroundColor:'#ffffff',
                position:'absolute',
                bottom:-5,
                right:5,
                borderRadius:15,
                alignItems:'center',
                justifyContent:'center'
            }}>
                <FontAwesome name="pencil" size={18} color="#022b64" />   
            </View>
        </TouchableOpacity>
    )
}