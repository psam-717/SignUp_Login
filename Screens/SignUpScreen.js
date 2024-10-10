import { View, SafeAreaView, Image, Text,TouchableOpacity, TextInput,KeyboardAvoidingView,Platform,StyleSheet } from "react-native";
import {ArrowLeftIcon, EyeIcon, EyeSlashIcon} from 'react-native-heroicons/solid'
import {useState} from 'react'
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";




export default function LoginScreen(){

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = async () =>{
        if(email && password){
            try{
                await createUserWithEmailAndPassword(auth, email, password);
            }catch(err){
                console.log('error ', err.message)
            }
        }
    }

    return(
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            
            {/* The SafeAreaView should be set to flex */}
            <SafeAreaView style={{flex:1, backgroundColor: 'white'}}> 
                <View className="flex-row justify-start mt-10 ">
                    <TouchableOpacity
                     className="bg-sky-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
                     onPress={() => navigation.goBack() }
                    >
                        <ArrowLeftIcon size={20} color='white'/>
                    </TouchableOpacity>
                </View>

                <View className="flex-row justify-center mt-8">
                    <Image 
                    style={{width: 200, height: 200}}
                    source={require('../assets/Images/signup.png')}  />
                </View>
            </SafeAreaView>

            <View className="pt-4 px-8 space-y-1" style={{ backgroundColor: '#E1E5E3', borderTopLeftRadius: 50,  borderTopRightRadius: 50}}>
                
                    <View className="space-y-1  ">
            
                        {/* Name input */}
                        <Text>Name</Text>
                        <TextInput
                        className="bg-gray-300 p-4 rounded-2xl text-black mb-6"
                        placeholder="Enter name"
                        placeholderTextColor="white"
                        
                        />

                        {/* email input */}
                        <Text> Email Address</Text>
                        <TextInput
                        className=" bg-gray-300 p-4 rounded-2xl text-black mb-6"
                        value={email}
                        onChangeText={value=> setEmail(value)}
                        placeholder="Enter email"
                        autoCapitalize='none'
                        placeholderTextColor="white"
                        />

                        {/* password input */}
                        <Text> Password</Text>
                        <View className='flex-row items-center space-x-2 mb-6'>
                            <TextInput
                            className=" bg-gray-300 p-4 rounded-2xl text-black  flex-1"
                            value={password}
                            onChangeText={value=> setPassword(value)}
                            autoCapitalize='none'
                            placeholder="Enter password"
                            placeholderTextColor="white"
                            secureTextEntry={!showPassword} // for setting the visibility of the password on/off 
                            />

                             <TouchableOpacity onPress={()=> setShowPassword(!showPassword)}>{/* visibility is turned on or off upon pressing */}
                                {
                                    showPassword?(
                                        <EyeSlashIcon size={20} color='black'/>
                                    ) :(
                                        <EyeIcon size={20} color='black'/>
                                    )
                                }
                            </TouchableOpacity>
                                
                        </View>
                        

                        

                        <TouchableOpacity onPress={handleSubmit} className="bg-sky-400 p-4 rounded-2xl ">
                            <Text className="text-center">Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                
                <Text className="text-center mt-4 font-bold text-lg">Or</Text>

                {/* Other platforms for signing up */}
                <View className="flex-row space-x-12 justify-center mt-4 mb-4">
                    <TouchableOpacity className="items-center">
                        <View>
                            <Image className="w-10 h-10" source={require('../assets/Images/googleone.jpg')}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className="items-center">
                        <View>
                            <Image className="w-10 h-10" source={require('../assets/Images/apple.jpg')}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className="items-center">
                        <View>
                            <Image className="w-10 h-10" source={require('../assets/Images/facebook.png')}/>
                        </View>
                    </TouchableOpacity>

                </View>

                <View className="flex-row justify-center mt-4 space-x-2">
                    <Text>Already have an account? </Text>

                    <TouchableOpacity
                        onPress={()=> {navigation.navigate('Login')}}
                    >
                        <Text className="text-sky-400">Log in</Text>
                    </TouchableOpacity>
                </View>

                

                
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})