import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

export const styl = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: 16,
      paddingVertical: 24,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    image: {
      width: 120,
      height: 120,
      marginRight: 16,
    },
    description: {
      flex: 1,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 14,
    },
  });