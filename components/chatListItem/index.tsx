import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { ChatRoom } from '../../types';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

import styles from './style';

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;
  console.log('user>>', chatRoom);
  const user = chatRoom.users[1];

  const navigation = useNavigation();

  const onclick = () => {
    // console.warn(`Pressed on ${user.name}`);
    navigation.navigate('ChatRoom');
  };
  return (
    <TouchableWithoutFeedback onPress={onclick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: user.imageUri }} style={styles.avatar} />
          <View style={styles.midContainer}>
            <Text style={styles.username}>{user.name}</Text>
            <Text numberOfLines={2} style={styles.lastMessage}>
              {chatRoom.lastMessage.content}
            </Text>
          </View>
        </View>
        <Text style={styles.time}>
          {moment(chatRoom.lastMessage.createdAt).fromNow()}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatListItem;
