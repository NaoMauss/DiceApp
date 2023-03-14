import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Logo from "./../screens/Logo";
import Questions from "./../screens/Questions";
import ResultPage from "./../screens/ResultPage";
import Button from "./../screens/Button";
import MoreResults from "../screens/MoreResults";
import Home from "../screens/Home";
import Menu from "../screens/Menu";
import Games from "../screens/Games";
import GameInfo from "../screens/GameInfo";
import GameRecommendation from "../screens/GameRecommendation";

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Logo />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerMode: "none" }}
        />
        <Stack.Screen
          name="Questions"
          component={Questions}
          options={{ headerMode: "none" }}
        />
        <Stack.Screen
          name="ResultPage"
          component={ResultPage}
          options={{ headerMode: "none" }}
        />
        <Stack.Screen
          name="MoreResults"
          component={MoreResults}
          options={{ headerMode: "none" }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ headerMode: "none" }}
        />
        <Stack.Screen
          name="Games"
          component={Games}
          options={{ headerMode: "none" }}
        />
        <Stack.Screen
          name="GameInfo"
          component={GameInfo}
          options={{ headerMode: "none" }}
        />
        <Stack.Screen
          name="gameRecommendation"
          component={GameRecommendation}
          options={{ headerMode: "none" }}
        />
      </Stack.Navigator>
      <Button />
    </NavigationContainer>
  );
};

export default RootStack;
