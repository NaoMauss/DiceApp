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

const GameInfo = () => {
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
        <TouchableOpacity>
          <Text style={styles.gameInstruction}>Instruction</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("gameRecommendation")}
        >
          <Text style={styles.gameRecommendation}>Recommendations</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.gameDescription}>
        <Text>
          Sed cursus lorem vitae mauris aliquet, finibus hendrerit urna
          hendrerit. Cras tempor orci sed dignissim placerat. Morbi vulputate,
          ipsum id faucibus euismod, risus est convallis augue, at congue magna
          ipsum quis augue. Integer pretium euismod eros nec ullamcorper. Nullam
          scelerisque urna at massa consequat, sed mattis urna mollis. Aliquam
          congue purus lorem, at pretium dui efficitur nec. Fusce non nulla
          vestibulum, fermentum lacus id, lobortis lacus. Aenean lobortis magna
          consequat dapibus tristique. Proin pellentesque viverra imperdiet.
          Nunc finibus felis ac nibh condimentum, sed mattis est venenatis.
          Integer aliquet lacus erat, quis consectetur lacus mollis ac. Aliquam
          semper, risus quis molestie vulputate, odio quam finibus dolor, a
          imperdiet elit arcu at lectus. Suspendisse fringilla nibh ut vehicula
          pulvinar. Vivamus eget venenatis mauris. Duis accumsan est tincidunt
          diam ultrices sollicitudin. In faucibus, nisl et pharetra bibendum,
          odio massa lacinia leo, sit amet gravida neque arcu ut nibh.
        </Text>
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
  gameInstruction: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "underline",
  },
  gameDescription: {
    marginTop: 50,
    marginLeft: 40,
    marginRight: 20,
    borderWidth: 1,
    width: 350,
    height: 200,
    borderColor: "grey",
    padding: 10,
  },
});

export default GameInfo;
