import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { lightTheme, darkTheme } from './styles/Styles.js';


export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [weight, setWeight] = useState('');
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [gender, setGender] = useState('male');
  const [bacResult, setBacResult] = useState(0);

  const calculateBAC = () => {

    if (!weight || isNaN(weight) || isNaN(bottles) || isNaN(hours)) {
      alert("Please enter valid values for weight, bottles, and hours.");
      return;
    }

    const liters = bottles * 0.33;
    const grams = liters * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - burning * hours;

    let result;
    if (gender === 'male') {
      result = gramsLeft / (weight * 0.7);
    } else {
      result = gramsLeft / (weight * 0.6);
    }

    if (result < 0) {
      result = 0;
    }


    setBacResult(result);
  };

  const styles = isDarkMode ? darkTheme : lightTheme;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Alcometer</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter Weight (kg)"
        value={weight}
        onChangeText={(text) => setWeight(text)}
      />
      <View style={styles.buttonContainer}>
        <Text style={styles.labelText}>Bottles: </Text>
        <TouchableOpacity onPress={() => setBottles(bottles - 1)}>
          <Text style={[styles.button, styles.minusButton]}>-</Text>
        </TouchableOpacity>
        <Text>{bottles}</Text>
        <TouchableOpacity onPress={() => setBottles(bottles + 1)}>
          <Text style={[styles.button, styles.plusButton]}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.labelText}>Hours: </Text>
        <TouchableOpacity onPress={() => setHours(hours - 1)}>
          <Text style={[styles.button, styles.minusButton]}>-</Text>
        </TouchableOpacity>
        <Text>{hours}</Text>
        <TouchableOpacity onPress={() => setHours(hours + 1)}>
          <Text style={[styles.button, styles.plusButton]}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text style={styles.labelText}>Gender: </Text>
        <TouchableOpacity onPress={() => setGender('male')}>
          <Text style={gender === 'male' ? styles.selected : styles.optionText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setGender('female')}>
          <Text style={gender === 'female' ? styles.selected : styles.optionText}>Female</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.calculateButton}
        onPress={calculateBAC}
      >
        <Text style={[styles.calculateButtonText, { color: 'white' }]}>Calculate</Text>
      </TouchableOpacity>
      <Text style={(bacResult >= 1) ? styles.errorResult : (bacResult >= 0.5 ? styles.warningResult : styles.safeResult)}>
        Result: {bacResult.toFixed(2)}
      </Text>
      <Switch value={isDarkMode} onValueChange={() => setIsDarkMode(!isDarkMode)} />
      <Text style={styles.themeText}>Switch theme</Text>
    </ScrollView>
  );
}





