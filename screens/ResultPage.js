import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../components/stylesQuestButton";

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

const ResultPage = ({ route }) => {
  const { option1, option2 } = route.params;
  console.log(option1, option2); // Get the parameters from the navigation
  const navigation = useNavigation(); // Use useNavigation

  const ShowMoreResultPress = () => {
    navigation.navigate("MoreResults"); // Navigate to Show more results
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <QuizContainer>
        <QuizRectangle>
          <QuizText>RANKING</QuizText>
        </QuizRectangle>
      </QuizContainer>

      <View style={styles.podiumContainer}>
        <View style={[styles.podiumSquare, styles.secondPlace]}>
          <Text style={styles.podiumNumber}>2</Text>
          <Image source={images[1]} style={styles.podiumImage} />
        </View>
        <View style={[styles.podiumSquare, styles.firstPlace]}>
          <Text style={styles.podiumNumber}>1</Text>
          <Image source={images[0]} style={styles.podiumImage} />
        </View>
        <View style={[styles.podiumSquare, styles.thirdPlace]}>
          <Text style={styles.podiumNumber}>3</Text>
          <Image source={images[2]} style={styles.podiumImage} />
        </View>
      </View>

      <TouchableOpacity
        style={styles.ShowMoreButton}
        onPress={ShowMoreResultPress}
      >
        <Text style={styles.ShowMoreText}>Show more results</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResultPage;
