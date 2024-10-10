import { View, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { signOut } from "firebase/auth"; //this function is provided by firebase to sign out the user
import { auth } from "../config/firebase";


export default function HomeScreen(){
    // directs the page to the welcome screen when Touchable is pressed
    const handleLogout = async () =>{
        await signOut(auth)
    }

    return(
        <SafeAreaView className='flex-1 items-center justify-center flex-row space-x-4'>
            
                <Text className='font-semibold text-2xl'>Home Screen</Text>
            
                <TouchableOpacity 
                    className='bg-sky-400  p-4 rounded-2xl'
                    onPress={handleLogout}
                >
                    <Text style={{fontSize:15}}>Logout</Text>
                </TouchableOpacity>
            
            
            
        </SafeAreaView>
    )
}