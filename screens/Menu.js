import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Box } from "@react-native-material/core";

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
          <QuizText>FOOD</QuizText>
        </QuizRectangle>
      </QuizContainer>

      <View style={styles.menuImg}>
        <View style={styles.foodSection}>
          <Image
            source={images[0]}
            style={{ width: 125, height: 125, marginBottom: 20 }}
          />
          <View style={styles.foodDescription}>
            <Text style={{ fontWeight: "bold" }}>Food Name</Text>
            <Text>Food Description</Text>
          </View>
        </View>

        <View style={styles.foodSection}>
          <Image
            source={images[0]}
            style={{ width: 125, height: 125, marginBottom: 20 }}
          />
          <View style={styles.foodDescription}>
            <Text style={{ fontWeight: "bold" }}>Food Name</Text>
            <Text>Food Description</Text>
          </View>
        </View>

        <View style={styles.foodSection}>
          <Image
            source={images[0]}
            style={{ width: 125, height: 125, marginBottom: 20 }}
          />
          <View style={styles.foodDescription}>
            <Text style={{ fontWeight: "bold" }}>Food Name</Text>
            <Text>Food Description</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuImg: {
    flex: 1,
    flexDirection: "column",
  },
  foodSection: {
    flexDirection: "row",
    left: 30,
  },
  foodDescription: {
    flexDirection: "column",
    top: 50,
    left: 20,
  },
});

export default Menu;
