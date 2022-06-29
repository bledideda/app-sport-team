import { useEffect, useState } from "react";
import { getToken, getUser } from "../api/StorageApi";


export default function useAuth(){

    const [token, setToken] = useState();
    const [user, setUser] = useState();


    useEffect(() => {
        const getAuthData = async () => {
            setToken(await getToken())
            setUser(await getUser())
        }
        getAuthData();
    },[])

    const setAuth = (data) => {
        setToken(data.token),
        setUser(data.user)
    }

    return {
        token,
        user,
        setAuth
    }
}