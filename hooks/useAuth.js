import { View, Text } from "react-native";
import {useState, useEffect} from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

export default function UseAuth(){
    const [user, setUser] = useState(null)

    useEffect(()=> {
        const unsub = onAuthStateChanged(auth, user=>{
            console.log('got user ', user);
            if(user){
                setUser(user);
            }else{
                setUser(null)
            }
        });
        return unsub;
    }, [])

    return{user}
}