export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Dashboard: undefined;
  Profile: undefined;
};

export type NavigatorProps = {
  id?: undefined;
  children: React.ReactNode;
  initialRouteName?: keyof RootStackParamList;
  screenOptions?: any;
};