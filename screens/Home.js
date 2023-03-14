import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Box } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-snap-carousel";

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

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const renderCarouselItem = ({ item, index }) => {
    return (
      <View>
        <Image source={item} style={{ width: 200, height: 200 }} />
      </View>
    );
  };

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <QuizContainer>
        <QuizRectangle>
          <QuizText>New Games</QuizText>
        </QuizRectangle>
      </QuizContainer>

      <View
        style={{
          backgroundColor: "white",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Carousel
          data={images}
          renderItem={renderCarouselItem}
          sliderWidth={300}
          itemWidth={200}
          loop={true}
          autoplay={true}
          autoplayDelay={1000}
          autoplayInterval={2000}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
      </View>

      {/* Discover Your Destiny */}

      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Questions")}>
          <Box
            w={360}
            h={130}
            left={15}
            top={40}
            style={{
              backgroundColor: "white",
              borderRadius: 5,
              borderColor: "lightgrey",
              borderWidth: 2,
            }}
          >
            <View style={styles.discover}>
              <Image
                style={styles.discoverImg}
                source={require("../assets/testDiscover.png")}
              />
              <View style={styles.discoverText}>
                <Text style={styles.discoverTitle}>
                  Discover your destiny !
                </Text>
                <Text style={styles.discoverDescription}>
                  Games of atmosphere, card, dice, skill, memory...
                </Text>
              </View>
            </View>
          </Box>
        </TouchableOpacity>
      </View>

      {/* What's on */}

      <View>
        <Text style={styles.WhatsOn}>What's on</Text>

        <View style={styles.WhatsOnBtn}>
          <TouchableOpacity onPress={() => navigation.navigate("Questions")}>
            <Image
              style={styles.WhatsOnImg}
              source={require("../assets/ranking.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.WhatsOnImg}
              source={require("../assets/news.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff  ",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    top: 5,
  },
  discoverImg: {
    width: 110,
    height: 110,
    top: 8,
    left: 8,
  },
  discover: {
    flex: 1,
    flexDirection: "row",
  },
  discoverTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  discoverText: {
    flex: 1,
    top: 10,
    left: 20,
  },
  discoverDescription: {
    top: 20,
  },
  WhatsOn: {
    top: 70,
    left: 130,
    fontSize: 30,
  },
  WhatsOnBtn: {
    top: 100,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  WhatsOnImg: {
    width: 170,
    height: 150,
  },
});

export default Home;
