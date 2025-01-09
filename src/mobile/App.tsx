import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import ProfileScreen from "./screens/ProfileScreen";
import type { RootStackParamList } from "./types/navigation";
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  console.log("1. Starting App render");
  console.log("2. Stack Navigator Type:", typeof Stack);
  console.log("3. Stack Navigator Properties:", Object.keys(Stack));
  console.log("4. Initializing navigation setup...");
  
  const screenOptions: NativeStackNavigationOptions = {
    headerShown: true,
    headerStyle: {
      backgroundColor: "#646cff",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "700",
    },
  };
  
  console.log("5. Screen Options:", screenOptions);
  console.log("6. Starting SafeAreaProvider render");
  
  return (
    <SafeAreaProvider>
      <>{console.log("7. SafeAreaProvider mounted")}</>
      <NavigationContainer
        onStateChange={(state) => {
          console.log("8. Navigation State Changed:", state);
          console.log("9. Current route:", state?.routes[state.index]?.name);
        }}
        onReady={() => {
          console.log("10. Navigation Container Ready");
          console.log("11. Initial setup complete");
        }}
      >
        <>{console.log("12. NavigationContainer mounted")}</>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={screenOptions}
        >
          <>{console.log("13. Stack.Navigator mounted")}</>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ title: "Accueil" }}
            listeners={{
              focus: () => {
                console.log("14. Home Screen Focused");
                console.log("15. Home Screen Props loaded");
              },
              blur: () => {
                console.log("16. Home Screen Blurred");
                console.log("17. Home Screen cleanup");
              },
            }}
          />
          <Stack.Screen 
            name="Login" 
            component={LoginScreen}
            options={{ title: "Connexion" }}
            listeners={{
              focus: () => {
                console.log("18. Login Screen Focused");
                console.log("19. Login Screen Props loaded");
              },
              blur: () => {
                console.log("20. Login Screen Blurred");
                console.log("21. Login Screen cleanup");
              },
            }}
          />
          <Stack.Screen 
            name="Dashboard" 
            component={DashboardScreen}
            options={{ title: "Tableau de bord" }}
            listeners={{
              focus: () => {
                console.log("22. Dashboard Screen Focused");
                console.log("23. Dashboard Screen Props loaded");
              },
              blur: () => {
                console.log("24. Dashboard Screen Blurred");
                console.log("25. Dashboard Screen cleanup");
              },
            }}
          />
          <Stack.Screen 
            name="Profile" 
            component={ProfileScreen}
            options={{ title: "Profil" }}
            listeners={{
              focus: () => {
                console.log("26. Profile Screen Focused");
                console.log("27. Profile Screen Props loaded");
              },
              blur: () => {
                console.log("28. Profile Screen Blurred");
                console.log("29. Profile Screen cleanup");
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}