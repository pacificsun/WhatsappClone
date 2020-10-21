import React from 'react';
import { View, Text, Image } from 'react-native';
import { ChatRoom } from '../../types';
import moment from 'moment';

import styles from './style';

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;
  console.log('user>>', chatRoom);
  const user = chatRoom.users[1];

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: user.imageUri }} style={styles.avatar} />
        <View style={styles.midContainer}>
          <Text style={styles.username}>{user.name}</Text>
          <Text numberOfLines={2} style={styles.lastMessage}>
            {moment(chatRoom.lastMessage.content).format('DD/MM/YYYY')}
          </Text>
        </View>
      </View>
      <Text style={styles.time}>{chatRoom.lastMessage.createdAt}</Text>
      {/* <Text style={styles.time}>Yesterday</Text> */}
    </View>
  );
};

export default ChatListItem;
