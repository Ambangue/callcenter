export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Dashboard: undefined;
  Profile: undefined;
};

export type NavigatorProps = {
  children: React.ReactNode;
  initialRouteName?: keyof RootStackParamList;
  screenOptions?: any;
  id?: string;  // Make id optional
};