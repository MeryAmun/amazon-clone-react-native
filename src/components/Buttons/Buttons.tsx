import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'

interface ButtonProps {
text:string,
onButtonPress: () => void,
containerStyles?:object
}
const Buttons = ({text, onButtonPress,containerStyles}:ButtonProps) => {
  return (
    <Pressable onPress={onButtonPress} style={[styles.root, containerStyles]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

export default Buttons;

const styles = StyleSheet.create({
    root:{
backgroundColor:'#e47911',
marginVertical:10,
height:35,
justifyContent:'center',
alignItems:'center',
borderRadius:5,
borderWidth:1,
borderColor:'#a15e1b'
    },
    text:{
fontSize:16,

    }
})