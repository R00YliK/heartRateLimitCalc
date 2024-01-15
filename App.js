import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [lower, setLower] = useState('');
  const [higher, setHigher] = useState('');

  function calculate() {
    const lowerLimit = (220 - parseInt(age)) * 0.65;
    const higherLimit = (220 - parseInt(age)) * 0.85;

    setLower(lowerLimit);
    setHigher(higherLimit);
  }

  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput
        style={styles.field}
        value={age}
        onChangeText={(text) => setAge(text)}
        keyboardType="decimal-pad"
      />
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>
        {lower} - {higher}
      </Text>
      <Button onPress={calculate} title="Calculate" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 10,
  },
  field: {
    marginBottom: 10,
  },
});
