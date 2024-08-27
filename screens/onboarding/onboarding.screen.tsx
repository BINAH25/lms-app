import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'
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
          <Image 
          source={require('@/assets/onboarding/shape_9.png')}
          />
        </View>

        <View style={styles.titleWraper}>
          <Image 
            source={require('@/assets/onboarding/shape_9.png')}
            style={ styles.titleTextShape1}
          />

          <Text style={[styles.titleText, {fontFamily:"Raleway_700Bold"}]}>
              Start Learning With
          </Text>

          <Image 
          source={require('@/assets/onboarding/shape_9.png')}
          style={ styles.titleTextShape2}
        />

        </View>
        <View>
          <Image 
            source={require('@/assets/onboarding/shape_6.png')}
            style={ styles.titleTextShape3}
          />

          <Text style={[styles.titleText, {fontFamily:"Raleway_700Bold"}]}>
              Codex Technologies
          </Text>

        </View>

        <View style={styles.dscpWrapper}>
          <Text style={[styles.dscpText, {fontFamily:"Nunito_400Regular"} ]}>
            explore a variety of interactive lessons
          </Text>
          <Text style={[styles.dscpText, {fontFamily:"Nunito_400Regular"} ]}>
            videos, quizzes & assignments
          </Text>

        </View>
        <TouchableOpacity style={styles.buttonWrapper}>
          <Text style={[styles.buttonText, {fontFamily:"Nunito_700Bold"}]}>
            Getting Started
          </Text>
        </TouchableOpacity>

      </View>

    </LinearGradient>
   
  )
}
export default OnboardingScreen

const styles = StyleSheet.create({
  gradientStyle:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#ffffff'
  },
  container:{
    alignItems:'center',
    marginTop:50
  },
  logo:{
    width: wp("23%"),
    height: hp("10%")
  },
  titleWraper:{
    flexDirection:'row'
  }, 
  titleTextShape1:{
    position:'absolute',
    left: -28,
    top: -20,
  }, 
  titleTextShape2:{
    position:'absolute',
    right: -40,
    top: -20,
  }, 
  titleTextShape3:{
    position:'absolute',
    left: 60,
  }, 
  titleText:{
    fontSize: hp("4%"),
    textAlign:"center"
  },
  dscpWrapper:{
    marginTop:30
  },
  dscpText:{
    textAlign:'center',
    color:"#575757",
    fontSize:hp("2%")
  },
  buttonWrapper: {
    backgroundColor: "#2467EC",
    width: wp("92%"),
    paddingVertical: 18,
    borderRadius: 4,
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  welcomeButtonStyle:{
    backgroundColor: "#2467EC",
    // width: responsiveWidth(88),
    // height: responsiveHeight(5.5),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  }
})