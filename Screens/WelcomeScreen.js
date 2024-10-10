import { View, SafeAreaView, Text,Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useNavigation } from "@react-navigation/native";



export default function WelcomeScreen(){
    const navigation = useNavigation();

    return(
        <SafeAreaView className="flex-1" style={{backgroundColor: 'white'}}>
            <View className='flex-1 flex my-4 justify-around'>
                <Text
                    className=' text-4xl text-black text-center font-bold'
                >Let's get started</Text>

                <View className="flex-row justify-center">
                    <Image source={require('../assets/Images/intro.png')} 
                        style={{width: 350, height: 350}}
                    />
                </View>

                <View className="space-y-4">
                    <TouchableOpacity 
                    className="py-3 bg-sky-400 mx-7 rounded-xl" 
                    onPress={()=> navigation.navigate('Sign up')}
                    >
                        <Text className="text-center font-bold text-xl text-white">Sign Up</Text>
                    </TouchableOpacity>

                    <View className="flex-row justify-center space-x-3">
                        <Text className="text-center font-semibold">Already have an account?</Text>
                        <TouchableOpacity 
                            onPress={()=> navigation.navigate('Login')}>
                            <Text className="font-semibold text-sky-400">Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
        </SafeAreaView>
    )
}