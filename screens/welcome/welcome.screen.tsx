import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito'
import {useFonts, Raleway_700Bold } from '@expo-google-fonts/raleway'
import { LinearGradient } from 'expo-linear-gradient'
import { onboardingSwiperData } from '@/constants/constant'
import AppIntroSlider from 'react-native-app-intro-slider'
import { router } from "expo-router";
import { Platform } from 'react-native';

import {
    responsiveHeight,
    responsiveWidth,
  } from "react-native-responsive-dimensions";
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  
const WelcomeScreen = () => {

    let [fontsLoaded, fontError] = useFonts({
        Raleway_700Bold,
        Nunito_400Regular,
        Nunito_700Bold,
    });
    
    if (!fontsLoaded && !fontError) {
    return null;
    }

    const renderItem = ({ item }: { item: onboardingSwiperDataType }) => (
        <LinearGradient
          colors={["#E5ECF9", "F6F7F9", "#E8EEF9"]}
          style={{ flex: 1, paddingHorizontal: 16 }}
        >
          <View style={{ marginTop: 80 }}>
            <Image
              source={item.image}
              style={{ alignSelf: "center", marginBottom: 30 }}
            />
            <Text style={[commonStyles.title, { fontFamily: "Raleway_700Bold" }]}>
              {item.title}
            </Text>
            <View style={{ marginTop: 15 }}>
              <Text
                style={[
                  commonStyles.description,
                  { fontFamily: "Nunito_400Regular" },
                ]}
              >
                {item.description}
              </Text>
              <Text
                style={[
                  commonStyles.description,
                  { fontFamily: "Nunito_400Regular" },
                ]}
              >
                {item.sortDescrition}
              </Text>
              <Text
                style={[
                  commonStyles.description,
                  { fontFamily: "Nunito_400Regular" },
                ]}
              >
                {item.sortDescrition2}
              </Text>
            </View>
          </View>
        </LinearGradient>
    );
    
    
    return (
        <AppIntroSlider
          renderItem={renderItem}
          data={onboardingSwiperData}
          onDone={() => {
            router.push("/login");
          }}
          onSkip={() => {
            router.push("/login");
          }}
          renderNextButton={() => (
            <View style={commonStyles.welcomeButtonStyle}>
              <Text
                style={[commonStyles.buttonText, { fontFamily: "Nunito_700Bold" }]}
              >
                Next
              </Text>
            </View>
          )}
          renderDoneButton={() => (
            <View style={commonStyles.welcomeButtonStyle}>
              <Text
                style={[commonStyles.buttonText, { fontFamily: "Nunito_700Bold" }]}
              >
                Done
              </Text>
            </View>
          )}
          showSkipButton={false}
          dotStyle={commonStyles.dotStyle}
          bottomButton={true}
          activeDotStyle={commonStyles.activeDotStyle}
        />
    );
}

export default WelcomeScreen

const commonStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonContainer: {
      backgroundColor: "#2467EC",
      width: responsiveWidth(88),
      height: responsiveWidth(2.5),
      borderRadius: 5,
      marginHorizontal: 5,
    },
    dotStyle: {
      backgroundColor: "#C6C7CC",
      width: responsiveWidth(2.5),
      height: responsiveWidth(2.5),
      borderRadius: 5,
      marginHorizontal: 5,
    },
    activeDotStyle: {
      backgroundColor: "#2467Ec",
      width: responsiveWidth(2.5),
      height: responsiveWidth(2.5),
      borderRadius: 5,
      marginHorizontal: 5,
    },
    title: {
      fontSize: hp("3.5%"),
      color: Platform.OS === 'android' ? 'white' : 'black',
      textAlign: "center",
    },
    description: {
      fontSize: hp("2.5%"),
      color: Platform.OS === 'android' ? '#fff' : '#575757',
      textAlign: "center",
    },
    input: {
      height: 55,
      marginHorizontal: 16,
      borderRadius: 8,
      paddingLeft: 35,
      fontSize: 16,
      backgroundColor: "white",
      color: "#A1A1A1",
    },
    errorContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: 16,
      position: "absolute",
      top: 60,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
    },
    welcomeButtonStyle:{
        backgroundColor: "#2467EC",
        width: responsiveWidth(88),
        height: responsiveHeight(5.5),
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    }
});
  