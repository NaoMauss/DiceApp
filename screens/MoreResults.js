import React, { useState } from 'react';
import { Text, Image, View } from 'react-native';
import { styl } from './../components/MoreStyle'


const images = [
  require('./image/g.png'),
  require('./image/cyberpunk.png'),
  require('./image/butterfly.png'),
];

import {
  QuizContainer,
  QuizRectangle,
  QuizText,
} from '../components/QuestStyle';

const MoreResults = () => {
  return (
    <>
    <QuizContainer>
        <QuizRectangle>
          <QuizText>RANKING</QuizText>
        </QuizRectangle>
      </QuizContainer>

    <View style={styl.container}>
      <View style={styl.row}>
        <Image source={images[0]} style={styl.image} />
        <View style={styl.description}>
          <Text style={styl.title}>Image 1</Text>
          <Text style={styl.subtitle}>Description of Image 1</Text>
        </View>
      </View>
      <View style={styl.row}>
        <View style={styl.description}>
          <Text style={styl.title}>Image 2</Text>
          <Text style={styl.subtitle}>Description of Image 2</Text>
        </View>
        <Image source={images[1]} style={styl.image} />
      </View>
      <View style={styl.row}>
        <Image source={images[2]} style={styl.image} />
        <View style={styl.description}>
          <Text style={styl.title}>Image 3</Text>
          <Text style={styl.subtitle}>Description of Image 3</Text>
        </View>
      </View>
    </View>
    </>
  );
};

export default MoreResults;
