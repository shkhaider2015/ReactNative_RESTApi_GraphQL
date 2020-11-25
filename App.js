import 'react-native-gesture-handler';
import React from 'react';
import Routes from "./components/routes";
import { View } from 'react-native';


const Stack = createStackNavigator()

export default function App() {
  return (
    <View>
      <Routes />
    </View>
  );
}


