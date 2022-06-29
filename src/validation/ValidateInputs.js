import StaticData from "../constants/StaticData";

export function validateGender()
{

}

export function validateName()
{

}

export function validateUsername()
{

}

export function validateEmail(email)
{
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(email);
}

export function validatePhone(phoneNumber)
{
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    return re.test(phoneNumber);
}
export function validateCity(city)
{
    if(city !== null && city !== ''){
        return StaticData.cities.includes(city)
    }
    return false;
}