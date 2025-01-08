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
  id?: string | undefined;  // Allow both string and undefined values
};