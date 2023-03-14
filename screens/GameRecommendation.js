import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

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

const GameRecommendation = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <QuizContainer>
        <QuizRectangle>
          <QuizText>CYBERPUNK</QuizText>
        </QuizRectangle>
      </QuizContainer>

      <View>
        <Image
          source={images[1]}
          style={{ width: 300, height: 300, marginLeft: 60, marginTop: 20 }}
        />
      </View>

      <View style={styles.btnInfo}>
        <TouchableOpacity onPress={() => navigation.navigate("GameInfo")}>
          <Text style={styles.gameInstruction}>Instruction</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.gameRecommendation}>Recommendations</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuImg}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("GameInfo")}>
            <Image
              source={images[0]}
              style={{ width: 125, height: 125, marginBottom: 20 }}
            />
          </TouchableOpacity>
          <Text style={styles.gameName}>Game Name</Text>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate("GameInfo")}>
            <Image
              source={images[1]}
              style={{ width: 125, height: 125, marginBottom: 20 }}
            />
          </TouchableOpacity>
          <Text style={styles.gameName}>Game Name</Text>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate("GameInfo")}>
            <Image
              source={images[2]}
              style={{ width: 125, height: 125, marginBottom: 20 }}
            />
          </TouchableOpacity>
          <Text style={styles.gameName}>Game Name</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
  },
  gameRecommendation: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "underline",
  },
  menuImg: {
    top: 30,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  gameName: {
    textAlign: "center",
  },
});

export default GameRecommendation;
