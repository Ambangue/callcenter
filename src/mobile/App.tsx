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
  console.log("5. Checking Stack Navigator configuration");
  
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
  
  console.log("6. Screen Options:", screenOptions);
  console.log("7. Starting SafeAreaProvider render");
  console.log("8. Preparing navigation container");
  
  return (
    <SafeAreaProvider>
      <>{console.log("9. SafeAreaProvider mounted")}</>
      <NavigationContainer
        onStateChange={(state) => {
          console.log("10. Navigation State Changed:", state);
          console.log("11. Current route:", state?.routes[state.index]?.name);
          console.log("12. Navigation params:", state?.routes[state.index]?.params);
        }}
        onReady={() => {
          console.log("13. Navigation Container Ready");
          console.log("14. Initial setup complete");
          console.log("15. Navigation stack initialized");
        }}
      >
        <>{console.log("16. NavigationContainer mounted")}</>
        <Stack.Navigator
          id={undefined}
          initialRouteName="Home"
          screenOptions={screenOptions}
        >
          <>{console.log("17. Stack.Navigator mounted")}</>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ title: "Accueil" }}
            listeners={{
              focus: () => {
                console.log("18. Home Screen Focused");
                console.log("19. Home Screen Props loaded");
                console.log("20. Home Screen render started");
              },
              blur: () => {
                console.log("21. Home Screen Blurred");
                console.log("22. Home Screen cleanup");
                console.log("23. Home Screen unmounting");
              },
            }}
          />
          <Stack.Screen 
            name="Login" 
            component={LoginScreen}
            options={{ title: "Connexion" }}
            listeners={{
              focus: () => {
                console.log("24. Login Screen Focused");
                console.log("25. Login Screen Props loaded");
                console.log("26. Login Screen render started");
              },
              blur: () => {
                console.log("27. Login Screen Blurred");
                console.log("28. Login Screen cleanup");
                console.log("29. Login Screen unmounting");
              },
            }}
          />
          <Stack.Screen 
            name="Dashboard" 
            component={DashboardScreen}
            options={{ title: "Tableau de bord" }}
            listeners={{
              focus: () => {
                console.log("30. Dashboard Screen Focused");
                console.log("31. Dashboard Screen Props loaded");
                console.log("32. Dashboard Screen render started");
              },
              blur: () => {
                console.log("33. Dashboard Screen Blurred");
                console.log("34. Dashboard Screen cleanup");
                console.log("35. Dashboard Screen unmounting");
              },
            }}
          />
          <Stack.Screen 
            name="Profile" 
            component={ProfileScreen}
            options={{ title: "Profil" }}
            listeners={{
              focus: () => {
                console.log("36. Profile Screen Focused");
                console.log("37. Profile Screen Props loaded");
                console.log("38. Profile Screen render started");
              },
              blur: () => {
                console.log("39. Profile Screen Blurred");
                console.log("40. Profile Screen cleanup");
                console.log("41. Profile Screen unmounting");
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}