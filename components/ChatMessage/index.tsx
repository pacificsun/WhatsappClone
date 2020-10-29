import React from 'react';

import { Text, View } from 'react-native';
import moment from 'moment';

import { Message } from '../../types';
import styles from './style';
export type ChatMessageProps = {
  message: Message;
};

const ChatMessage = (props: ChatMessageProps) => {
  const { message } = props;
  return (
    <View style={styles.container}>
      <View style={styles.messageBox}>
        <Text>{message.user.id}</Text>
        <Text>{message.content}</Text>
        <Text>{moment(message.createdAt).fromNow()}</Text>
      </View>
    </View>
  );
};

export default ChatMessage;
