import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import {useFonts, Raleway_700Bold } from '@expo-google-fonts/raleway'
import { Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito'
import { LinearGradient } from 'expo-linear-gradient'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
const OnboardingScreen = () => {
  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold
  })

  if (!fontsLoaded && !fontError){
    return null
  }

  return (
    <LinearGradient 
    colors={["#e5ecf9","f6f7f9"]}
    style={styles.gradientStyle}>
      <View style={styles.container}>
        <View>
          <Image 
          source={require('@/assets/logo.png')}
          style={ styles.logo}/>
        </View>

      </View>

    </LinearGradient>
   
  )
}
export default OnboardingScreen

const styles = StyleSheet.create({
  gradientStyle:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  container:{
    alignItems:'center',
    marginTop:50
  },
  logo:{
    width: wp("23%"),
    height: hp("10%")
  }
})