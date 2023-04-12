import { SafeAreaView, TextInput,View,StyleSheet} from 'react-native';
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'


interface HomeHeaderProps{
searchTerm:string,
setSearchTerm:() => void
}
const HomeHeader = ({searchTerm, setSearchTerm}:HomeHeaderProps) => {
  return (
    <SafeAreaView style={styles.root}>
   <View style={styles.inputContainer}>
    <Feather name='search' size={20} />
   <TextInput style={styles.input} placeholder='Search...'
   value={searchTerm}
   onChangeText={setSearchTerm}
   />
   </View>
    </SafeAreaView>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    root:{
    backgroundColor:'#22e3dd'
    },
    inputContainer:{
        backgroundColor:'white',
        margin:10,
        padding:5,
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center'
    },
   input:{
      height:40,
      marginLeft:10
    }
  })
  