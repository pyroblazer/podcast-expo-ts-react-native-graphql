import React from 'react';
import {Keyboard, ScrollView, StyleSheet, Pressable} from 'react-native';

interface Props {
  withScrollView?: boolean;
}

const KeyboardDismissView: React.FC<Props> = (props) => {
  if (props.withScrollView) {
    return (
      <ScrollView
        keyboardShouldPersistTaps="never"
        contentContainerStyle={s.container}>
        {props.children}
      </ScrollView>
    );
  }

  return (
    <Pressable
      activeOpacity={1}
      style={s.container}
      onPress={Keyboard.dismiss}>
      {props.children}
    </Pressable>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default KeyboardDismissView;
