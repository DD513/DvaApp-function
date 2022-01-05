import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";

import Entrance from "./screens/Entrance";
import Home from "./screens/Home";
import Message from "./screens/Message";

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Entrance">
    <Stack.Screen name="Entrance" component={Entrance}></Stack.Screen>
    <Stack.Screen name="Home" component={Home}></Stack.Screen>
    <Stack.Screen name="Message" component={Message}></Stack.Screen>
  </Stack.Navigator>
);

export default connect()(
  (Router = () => {
    return (
      <NavigationContainer>
        <StackNavigator></StackNavigator>
      </NavigationContainer>
    );
  })
);
