import React from "react"; 
import {createAppContainer} from "react-navigation"
import {createStackNavigatior} from "react-navigation-stack"
import HomeScreen from "./screens/HomeScreen";
import DetailingScreen from "./screens/DetailingScreen";

export default function App() {
  return <AppContainer/>; 
}

const appStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    Details: {
      screen: DetailingScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(appStackNavigator);
