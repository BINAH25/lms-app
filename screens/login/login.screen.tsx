import { ScrollView, StyleSheet, Text, View, Image,TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import {
    Entypo,
    FontAwesome,
    Fontisto,
    Ionicons,
    SimpleLineIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
useFonts,
Raleway_700Bold,
Raleway_600SemiBold,
} from "@expo-google-fonts/raleway";
import { useState } from "react";

import {
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_700Bold,
    Nunito_600SemiBold,
} from "@expo-google-fonts/nunito";
import { router } from 'expo-router';

const LoginScreen = () => {

    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [buttonSpinner, setButtonSpinner] = useState(false);
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });
    const [required, setRequired] = useState("");
    const [error, setError] = useState({
        password: "",
    });

    let [fontsLoaded, fontError] = useFonts({
        Raleway_600SemiBold,
        Raleway_700Bold,
        Nunito_400Regular,
        Nunito_500Medium,
        Nunito_700Bold,
        Nunito_600SemiBold,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }


    const handlePasswordValidation = (value: string) => {
        const password = value;
        const passwordSpecialCharacter = /(?=.*[!@#$&*])/;
        const passwordOneNumber = /(?=.*[0-9])/;
        const passwordSixValue = /(?=.{6,})/;
    
        if (!passwordSpecialCharacter.test(password)) {
          setError({
            ...error,
            password: "Write at least one special character",
          });
          setUserInfo({ ...userInfo, password: "" });
        } else if (!passwordOneNumber.test(password)) {
          setError({
            ...error,
            password: "Write at least one number",
          });
          setUserInfo({ ...userInfo, password: "" });
        } else if (!passwordSixValue.test(password)) {
          setError({
            ...error,
            password: "Write at least 6 characters",
          });
          setUserInfo({ ...userInfo, password: "" });
        } else {
          setError({
            ...error,
            password: "",
          });
          setUserInfo({ ...userInfo, password: value });
        }
    };

    const handleSignIn = async () => {
        // await axios
        //   .post(`${SERVER_URI}/login`, {
        //     email: userInfo.email,
        //     password: userInfo.password,
        //   })
        //   .then(async (res) => {
        //     await AsyncStorage.setItem("access_token", res.data.accessToken);
        //     await AsyncStorage.setItem("refresh_token", res.data.refreshToken);
        //     router.push("/(tabs)");
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //     Toast.show("Email or password is not correct!", {
        //       type: "danger",
        //     });
        //   });
      };

  return (
    <LinearGradient
    colors={["#E5ECF9", "#F6F7F9"]}
    style={{ flex: 1, paddingTop: 20 }}>
        <ScrollView>
            <Image
            style={styles.signInImage}
            source={require("@/assets/sign-in/login.png")}
            />
            <Text style={[styles.welcomeText, { fontFamily: "Raleway_700Bold" }]}>
            Welcome Back Codex!
            </Text>
            <Text style={styles.learningText}>
            Login to Continue
            </Text>
            <View style={styles.inputContainer}>
                <View>
                    <TextInput
                        style={[styles.input, { paddingLeft: 40 }]}
                        keyboardType="default"
                        value={userInfo.email}
                        placeholder="username"
                        placeholderTextColor="#A1A1A1" 
                        onChangeText={(value) =>
                            setUserInfo({ ...userInfo, email: value })
                        }
                    />
                    <Fontisto
                    style={{ position: "absolute", left: 26, top: 17.8 }}
                    name="person"
                    size={20}
                    color={"#A1A1A1"}
                    />
                    {required && (
                    <View style={styles.errorContainer}>
                        <Entypo name="cross" size={18} color={"red"} />
                    </View>
                    )}
                    <View style={{ marginTop: 15 }}>
                        <TextInput
                            style={styles.input}
                            keyboardType="default"
                            secureTextEntry={!isPasswordVisible}
                            defaultValue=""
                            placeholderTextColor="#A1A1A1" 
                            placeholder="********"
                            onChangeText={handlePasswordValidation}
                        />
                        <TouchableOpacity
                            style={styles.visibleIcon}
                            onPress={() => setPasswordVisible(!isPasswordVisible)}
                        >
                            {isPasswordVisible ? (
                            <Ionicons
                                name="eye-off-outline"
                                size={23}
                                color={"#747474"}
                            />
                            ) : (
                            <Ionicons name="eye-outline" size={23} color={"#747474"} />
                            )}
                        </TouchableOpacity>
                        <SimpleLineIcons
                            style={styles.icon2}
                            name="lock"
                            size={20}
                            color={"#A1A1A1"}
                        />
                    </View>
                    {error.password && (
                    <View style={[styles.errorContainer, { top: 145 }]}>
                        <Entypo name="cross" size={18} color={"red"} />
                        <Text style={{ color: "red", fontSize: 11, marginTop: -1 }}>
                        {error.password}
                        </Text>
                    </View>
                    )}
                </View>
                    <TouchableOpacity
                    onPress={() => router.push("/(routes)/forgot-password")}
                    >
                    <Text
                        style={[
                        styles.forgotSection,
                        { fontFamily: "Nunito_600SemiBold" },
                        ]}
                    >
                        Forgot Password?
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
              style={{
                padding: 16,
                borderRadius: 8,
                marginHorizontal: 16,
                backgroundColor: "#2467EC",
                marginTop: 15,
              }}
              onPress={handleSignIn}
            >
              {buttonSpinner ? (
                <ActivityIndicator size="small" color={"white"} />
              ) : (
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 16,
                    fontFamily: "Raleway_700Bold",
                  }}
                >
                  Login 
                </Text>
              )}
            </TouchableOpacity>
            </View>
        </ScrollView>
    </LinearGradient>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    signInImage: {
      width: "60%",
      height: 250,
      alignSelf: "center",
      marginTop: 50,
    },
    welcomeText: {
      textAlign: "center",
      fontSize: 24,
    },
    learningText: {
      textAlign: "center",
      color: "#575757",
      fontSize: 15,
      marginTop: 5,
    },
    inputContainer: {
      marginHorizontal: 16,
      marginTop: 30,
      rowGap: 30,
    },
    input: {
      height: 55,
      borderRadius: 8,
      marginHorizontal:8,
      paddingLeft: 35,
      fontSize: 16,
      backgroundColor: "white",
      color: "#000",
    },
    label: {
      fontSize: 20,
      padding: 8
    },
    visibleIcon: {
      position: "absolute",
      right: 30,
      top: 15,
    },
    icon2: {
      position: "absolute",
      left: 23,
      top: 17.8,
      marginTop: -2,
    },
    forgotSection: {
      marginHorizontal: 16,
      textAlign: "right",
      fontSize: 16,
      marginTop: 10,
    },
    signupRedirect: {
      flexDirection: "row",
      marginHorizontal: 16,
      justifyContent: "center",
      marginBottom: 20,
      marginTop: 20,
    },
    errorContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 16,
        position: "absolute",
        top: 60,
    },
    
});
  