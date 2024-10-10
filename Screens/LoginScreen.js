import { View, SafeAreaView, Image, Text,TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";
import {ArrowLeftIcon, EyeIcon, EyeSlashIcon} from 'react-native-heroicons/solid'
import {useState} from 'react'
import { useNavigation } from "@react-navigation/native";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";




export default function LoginScreen(){

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = async () =>{
        if(email && password){
            try{
                await signInWithEmailAndPassword(auth, email, password);
            }catch(err){
                console.log('error ', err.message)
            }
        }

    }
    return(
        <KeyboardAvoidingView behavior='padding' className="flex-1 bg-white">
            
            {/* The SafeAreaView should be set to flex */}
            <SafeAreaView className="flex-1"> 
                <View className="flex-row justify-start mt-10 ">
                    <TouchableOpacity
                     className="bg-sky-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
                     onPress={() => navigation.goBack() }
                    >
                        <ArrowLeftIcon size={20} color='white'/>
                    </TouchableOpacity>
                </View>

                <View className="flex-row justify-center mt-4">
                    <Image 
                    style={{width: 200, height: 200}}
                    source={require('../assets/Images/login.png')}  />
                </View>
            </SafeAreaView>

            <View className=" pt-8 px-8 space-y-3" style={{flex: 2, backgroundColor: '#E1E5E3', borderTopLeftRadius: 50,  borderTopRightRadius: 50}}>
                <View className="space-y-2 ">
                    <Text> Email address</Text>
                        <TextInput
                        className=" bg-gray-300 p-4 rounded-2xl text-black mb-6 "
                        value={email}
                        onChangeText={value=> setEmail(value)}
                        placeholder="Enter email"
                        autoCapitalize='none'
                        placeholderTextColor="white"
                        />


                    <Text>Password</Text>
                    <View className='flex-row items-center space-x-2 rounded-full' >
                        <TextInput
                        className="bg-gray-300 p-4 rounded-2xl text-black flex-1"
                        value={password}
                        onChangeText={value=> setPassword(value)}
                        autoCapitalize='none'
                        placeholder="Enter password"
                        placeholderTextColor="white"
                        secureTextEntry={!showPassword}
                        />

                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? (
                                    <EyeSlashIcon size={20} color='black'/>
                                ) : (
                                    <EyeIcon size={20} color='black'/>
                                )
                            }
                        </TouchableOpacity>

                    </View>
                    

                   

                    <TouchableOpacity className="items-end mb-6">
                        <Text>Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={handleSubmit}
                    className="bg-sky-400 p-4 rounded-2xl">
                        <Text className="text-center">Login</Text>
                    </TouchableOpacity>
                </View>
                <Text className="text-center mt-4 font-bold text-lg">Or</Text>

                <View className="flex-row space-x-12 justify-center mt-4">
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
                    <Text>Don't have an account? </Text>

                    <TouchableOpacity
                        onPress={()=> {navigation.navigate('Sign up')}}
                    >
                        <Text className="text-sky-400">Sign up</Text>
                    </TouchableOpacity>
                </View>

                

                
            </View>
        </KeyboardAvoidingView>
    )
}