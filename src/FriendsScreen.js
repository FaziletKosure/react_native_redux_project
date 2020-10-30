import React from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import {StyleSheet, Text, View, Button} from 'react-native';
import {addFriend} from './actions/FriendsActions';

const FriendsScreen = (props) => {
  const myFriends = useSelector((myfriend) => myfriend.friends.possible);
  const myCurrentFriends = useSelector((friend) => friend.friends.current);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>Add friends here!</Text>
      <View style={{padding: 5, margin: 5}}>
        {myFriends.map((friend, index) => (
          <Button
            key={friend}
            title={`Add ${friend}`}
            onPress={() => dispatch(addFriend(index))}
          />
        ))}
      </View>

      <Button
        title="Back to home"
        onPress={() => props.navigation.navigate('Home')}
      />
      {myCurrentFriends.map((currentfriend, index) => (
        <Text>{`${currentfriend}`}</Text>
      ))}
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

export default FriendsScreen;
