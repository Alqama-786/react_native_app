import * as React from "react";
import { LogBox } from "react-native";
// import ExampleText from "./src/components/Text";
// import Challenge from "./src/components/Challenge";
// import FlatListDemo from "./src/components/FlatList";
// import ImageFile from "./src/components/Images";
// import ButtonExample from "./src/components/Button";
// import NetflixCard from "./src/components/NetflixCard";
// import BoxesDemo from "./src/components/Boxes";
// import BoxPositions from "./src/components/BoxPositions";
// import Counter from "./src/components/Counter";
// import GenerateRandomColor from "./src/screens/GenerateRandomColor";
// import Users from "./src/screens/Users";
import LoginForm from "./src/screens/Login";
import HomePage from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
