import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  // style QuestionsButton
  option: {
    flex: 1,
    margin: 3,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  optionText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
  },
  selectedOption: {
    backgroundColor: '#e9bd1f',
  },
  selectedOptionText: {
    color: '#000',
  },

  // style RESULT button
  resultButton: {
    width: 100,
    height: 50,
    backgroundColor: '#062c49',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5,
  },

  resultText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#e9bd1f',
  },


// ResultPage

  podiumContainer: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 120,
    backgroundColor: '#ffffff',
  },

  podiumImage: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: -110,
    backgroundColor: '#ffffff',
  },

  podiumSquare: {
    backgroundColor: '#f6c90e',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
    flex: 1,
    alignSelf: 'flex-end',
  },
  firstPlace: {
    height: 220,
  },
  secondPlace: {
    height: 160,
  },
  thirdPlace: {
    height: 125,
  },
  

  podiumNumber: {
    color: 'black',
    fontSize: 80,
    fontWeight: 'bold',
  },

  ShowMoreButton: {
    width: 200,
    height: 50,
    backgroundColor: '#062c49',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5,
    alignSelf: 'center',
  },
  

  ShowMoreText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#e9bd1f',
  },
});