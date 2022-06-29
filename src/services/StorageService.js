import AsyncStorage from '@react-native-async-storage/async-storage';

export default class StorageService {

    async storeData ( key, value) {
        try {
          await AsyncStorage.setItem(key, value)
        } catch (e) {
          // saving error
          console.log(e);
        }
    }

    async getData(key) {
        try {
          const value = await AsyncStorage.getItem(key)
          return value;
        } catch(e) {
          // error reading value
          console.log(e);
        }
    }

    async storeObjectData(key,value){
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(key, jsonValue)
        } catch (e) {
            // saving error
            console.log(e);
        }
    }

    async getoObjectData(key) {
        try {
          const jsonValue = await AsyncStorage.getItem(key)
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
            console.log(e);
        }
    }

    async removeData(key) {
        try {
            //await AsyncStorage.removeItem(key)
            return true;
        } catch(e) {
            // remove error
            console.log(e);
            return false;
        }
    }

}