import { StyleSheet, ImageBackground, Image } from "react-native";
import headerBg from '../../../assets/headerbg.png';
import headerBg2 from '../../../assets/headerbg2.png'; 
import logo from '../../../assets/logo.png'; 

export default function PublicHeader(props){
    const { bg, logoActive, children } = props;
    return (
        <ImageBackground source={bg === 'variant_1'? headerBg : headerBg2} style={styles.header} resizeMode="stretch">
            {logoActive && <Image source={logo} style={styles.headerImage}  /> }
            {children}
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    header:{
        alignItems:'center',
        justifyContent:'center',
        height:300,
        backgroundColor:'#ffffff'
    },
    headerImage:{
        resizeMode:'contain',
        height:120,
    }, 
});