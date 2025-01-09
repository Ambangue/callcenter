export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Dashboard: undefined;
  Profile: undefined;
};

// Add explicit typing for the navigator
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}