import styled from 'styled-components';
import { View, Text, TouchableOpacity, TextInput, Image, } from 'react-native';

// colors
export const Colors = {
  primary: '#ffffff',
  yelow: '#e9bd1f'
};

const { primary, yelow } = Colors;

export const StyledContainer = styled.View`
  padding: 10px;
  background-color: ${Colors.primary};
`;

export const InnerContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const PageLogo = styled.Image`
  width: 100px;
  height: 100px;
`;

export const PageLine = styled.View`
  border-bottom-color: rgba(128, 128, 128, 0.5);
  border-bottom-width: 4px;
  width: 100%;
`;

export const QuizContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const QuizRectangle = styled.View`
  width: 150px;
  height: 50px;
  background-color: ${Colors.yelow};
  justify-content: center;
  border-radius: 5px;
`;

export const QuizText = styled.Text`
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  color: #000000;
`;



