import { Image } from "react-native";
import EditAvatar from "../../../assets/editavatar.png";
import SMS from "../../../assets/icons/sms.png";

import Football from "../../../assets/icons/football.png";
import Basketball from "../../../assets/icons/basketball.png";
import Voleyball from "../../../assets/icons/voleyball.png";
import Tenis from "../../../assets/icons/tenis.png";
import Times from "../../../assets/icons/times.png";
import ArrowUp from "../../../assets/icons/arrow-up.png";
import ArrowDown from "../../../assets/icons/arrow-down.png";

const icons = {
    sms: SMS,
    editAvatar:EditAvatar,
    football:Football,
    basketball:Basketball,
    voleyball:Voleyball,
    tenis:Tenis,
    times: Times,
    arrowUp: ArrowUp,
    arrowDown: ArrowDown
}


export default function AppIcon(props){
    // console.log(props);
    return (
        <Image source={icons[props.name]} style={[{resizeMode:'contain'}, props.style]} />
    )
}