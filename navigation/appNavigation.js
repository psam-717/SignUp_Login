import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import WelcomeScreen from "../Screens/WelcomeScreen";
import LoginScreen from "../Screens/LoginScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import UseAuth from "../hooks/useAuth";

const Stack = createNativeStackNavigator();

export default function AppNavigation(){
    const {user} = UseAuth();

    if(user){
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Welcome">
                    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false }}/>
                </Stack.Navigator>
            </NavigationContainer>
        )

    }else{
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Welcome">
                    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false }}/>
                    <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false }}/>
                    <Stack.Screen name="Sign up" component={SignUpScreen} options={{headerShown: false }}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
    
}