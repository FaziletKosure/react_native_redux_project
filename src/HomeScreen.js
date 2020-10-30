import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {connect, useSelector} from 'react-redux';

const HomeScreen = (props) => {
  const myFriends = useSelector((myfriend) => myfriend.friends.current);
  const myFriendPos = useSelector((myfriend) => myfriend.friends.possible);
  useEffect(() => {}, []);
  console.log(myFriends);
  return (
    <View style={styles.container}>
      <Text>You have {myFriendPos.length} possible friends.</Text>
      <Button
        title="Add some friends"
        onPress={() => props.navigation.navigate('Friends')}
      />
      <Text>Your Current Friends</Text>
      <Text>{myFriends}</Text>
      {/* <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={myFriends}
        renderItem={(item, index) => <Text>{item[index]}</Text>}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// const mapStateToProps = (state) => {
//   const {friends} = state;
//   return {friends};
// };

export default HomeScreen;
