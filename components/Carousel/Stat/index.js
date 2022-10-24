import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

export const Stat = (props) => {

  const { label, value } = props;

  return (
    <View style={styles.stat}>
      { props.children }
    </View>
  );
}

export default Stat;