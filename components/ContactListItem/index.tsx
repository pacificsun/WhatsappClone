import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { User } from '../../types';

import { useNavigation } from '@react-navigation/native';

import styles from './style';
export type ConatactListItemProps = {
  user: User; // giving types to user
};

const ContactListItem = (props: ConatactListItemProps) => {
  const { user } = props;

  const navigation = useNavigation();

  const onclick = () => {
    // navigate to chat room with this user
  };
  return (
    <TouchableWithoutFeedback onPress={onclick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: user.imageUri }} style={styles.avatar} />
          <View style={styles.midContainer}>
            <Text style={styles.username}>{user.name}</Text>
            <Text style={styles.status}>{user.status}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ContactListItem;
