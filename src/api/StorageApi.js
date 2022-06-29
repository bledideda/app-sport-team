import StorageService from "../services/StorageService";

const Storage = new StorageService();

export const saveToken = (token) => Storage.storeData("CSOA_AUTH_TOKEN", token);
export const getToken = () => Storage.getData("CSOA_AUTH_TOKEN");
export const saveUser = (user) => Storage.storeObjectData("CSOA_AUTH_USER", user);
export const getUser = () => Storage.getoObjectData("CSOA_AUTH_USER");

export const deleteStoredAuthData = async () => { 
    let tokenDeleted = await Storage.removeData('CSOA_AUTH_TOKEN');
    let userDeleted =  await Storage.removeData('CSOA_AUTH_USER');
    return tokenDeleted && userDeleted;
}