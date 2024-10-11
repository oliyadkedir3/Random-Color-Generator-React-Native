import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Dimensions } from 'react-native';

export default function HomeScreen() {
  const [bgColor, setBgColor] = useState('#398bd1');

    useEffect(() => {
    document.title = 'Random Color Generator';
  }, []);

  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    return randomColor;
  };

  const handleTap = () => {
    const newColor = generateRandomColor();
    setBgColor(newColor);
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={[styles.container, { backgroundColor: bgColor }]}
        onPress={handleTap}
      >
        <View>
          <Text style={styles.title}>Hello There</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    height: height * 0.9, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
