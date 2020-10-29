import React from 'react';

import { Text, View } from 'react-native';
import moment from 'moment';

import { Message } from '../../types';

export type ChatMessageProps = {
  message: Message;
};

const ChatMessage = (props: ChatMessageProps) => {
  const { message } = props;
  return (
    <View>
      <Text>{message.user.id}</Text>
      <Text>{message.content}</Text>
      <Text>{moment(message.createdAt).fromNow()}</Text>
    </View>
  );
};

export default ChatMessage;
