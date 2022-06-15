import { Image } from "react-native";
import EditAvatar from "../../../assets/editavatar.png";
import SMS from "../../../assets/icons/sms.png";

import Football from "../../../assets/icons/football.png";
import Basketball from "../../../assets/icons/basketball.png";
import Voleyball from "../../../assets/icons/voleyball.png";
import Tenis from "../../../assets/icons/tenis.png";

const icons = {
    sms: SMS,
    editAvatar:EditAvatar,
    football:Football,
    basketball:Basketball,
    voleyball:Voleyball,
    tenis:Tenis
}


export default function AppIcon(props){
    // console.log(props);
    return (
        <Image source={icons[props.name]} style={[{resizeMode:'contain'}, props.style]} />
    )
}