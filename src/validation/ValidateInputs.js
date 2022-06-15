import StaticData from "../constants/StaticData";

export function ValidateGender()
{

}

export function ValidateName()
{

}

export function ValidateUsername()
{

}

export function ValidateEmail()
{

}

export function ValidatePhone(phoneNumber)
{
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    return re.test(phoneNumber);
}
export function ValidateCity(city)
{
    if(city !== null && city !== ''){
        return StaticData.cities.includes(city)
    }
    return false;
}