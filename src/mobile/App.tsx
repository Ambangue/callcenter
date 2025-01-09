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
  console.log("1. Starting App render");
  console.log("2. Stack Navigator Type:", typeof Stack);
  console.log("3. Stack Navigator Properties:", Object.keys(Stack));
  
  const screenOptions = {
    headerShown: true,
    headerStyle: {
      backgroundColor: "#646cff",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };
  
  console.log("4. Screen Options:", screenOptions);
  
  return (
    <SafeAreaProvider>
      {console.log("5. Rendering SafeAreaProvider")}
      <NavigationContainer
        onStateChange={(state) => {
          console.log("6. Navigation State Changed:", state);
        }}
        onReady={() => {
          console.log("7. Navigation Container Ready");
        }}
      >
        {console.log("8. Rendering NavigationContainer")}
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={screenOptions}
        >
          {console.log("9. Rendering Stack.Navigator")}
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ title: "Accueil" }}
            listeners={{
              focus: () => console.log("10. Home Screen Focused"),
              blur: () => console.log("11. Home Screen Blurred"),
            }}
          />
          <Stack.Screen 
            name="Login" 
            component={LoginScreen}
            options={{ title: "Connexion" }}
            listeners={{
              focus: () => console.log("12. Login Screen Focused"),
              blur: () => console.log("13. Login Screen Blurred"),
            }}
          />
          <Stack.Screen 
            name="Dashboard" 
            component={DashboardScreen}
            options={{ title: "Tableau de bord" }}
            listeners={{
              focus: () => console.log("14. Dashboard Screen Focused"),
              blur: () => console.log("15. Dashboard Screen Blurred"),
            }}
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