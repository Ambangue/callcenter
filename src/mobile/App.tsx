import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import ProfileScreen from "./screens/ProfileScreen";
import type { RootStackParamList } from "./types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  console.log("Rendering Mobile App");
  
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          id="RootNavigator"
          initialRouteName="Home"
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#646cff",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ title: "Accueil" }}
          />
          <Stack.Screen 
            name="Login" 
            component={LoginScreen}
            options={{ title: "Connexion" }}
          />
          <Stack.Screen 
            name="Dashboard" 
            component={DashboardScreen}
            options={{ title: "Tableau de bord" }}
          />
          <Stack.Screen 
            name="Profile" 
            component={ProfileScreen}
            options={{ title: "Profil" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}