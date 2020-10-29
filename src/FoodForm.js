import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const FoodForm = (props) => {
  const [food, setFood] = useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redux</Text>
      <TextInput
        value={food}
        placeholder="Name"
        style={styles.foodInput}
        onChangeText={(food) => setFood({food})}
      />
      <TouchableOpacity
        style={{marginBottom: 16}}
        onPress={() => {
          props.add(food);
          setFood({food: null});
        }}>
        <Text style={{fontSize: 22, color: '#5fc9f8'}}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginBottom: 16}}
        onPress={() => props.navigation.navigate('FoodList')}>
        <Text style={{fontSize: 22}}>Go to FoodList</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FoodForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 64,
    marginBottom: 48,
  },
  foodInput: {
    fontSize: 32,
    marginBottom: 32,
    borderWidth: 1,
    padding: 8,
    width: '80%',
    borderRadius: 10,
  },
});
