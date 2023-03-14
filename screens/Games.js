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

const Games = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <QuizContainer>
        <QuizRectangle>
          <QuizText>GAMES</QuizText>
        </QuizRectangle>
      </QuizContainer>

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

export default Games;
