import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const images = [
  require("./image/g.png"),
  require("./image/cyberpunk.png"),
  require("./image/butterfly.png"),
];

import {
  QuizContainer,
  QuizRectangle,
  QuizText,
} from "../components/QuestStyle";

const Menu = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <QuizContainer>
        <QuizRectangle>
          <QuizText>MENU</QuizText>
        </QuizRectangle>
      </QuizContainer>

      <View style={styles.menuImg}>
        <Image
          source={images[0]}
          style={{ width: 125, height: 125, marginBottom: 20 }}
        />
        <Image
          source={images[1]}
          style={{ width: 125, height: 125, marginBottom: 20 }}
        />
        <Image source={images[2]} style={{ width: 125, height: 125 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuImg: {
    flex: 1,
    flexDirection: "column",
  },
});

export default Menu;
