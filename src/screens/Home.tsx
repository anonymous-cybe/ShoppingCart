import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native"
import React from "react"
import { intro } from "../assests"
import { colors } from "../constants/colors"
import { Link, router } from "expo-router"

const { height } = Dimensions.get("window")
const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={intro} alt="introImg" style={styles.introImg} />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.title}>Great way to lift your style</Text>
        <Text style={styles.subtitle}>
          complete your collection with sylvason
        </Text>
        <Pressable onPress={()=>router.push("/screens/Product")}><Text>hello</Text></Pressable>
        
          <TouchableOpacity style={styles.button}>
            <Text>Get Started</Text>
          </TouchableOpacity>
        
      </View>
    </View> 
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    height: height,
  },
  text: {
    color: "white",
  },
  top: {
    height: height / 2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  introImg: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
    marginTop: -10,
  },
  bottom: {
    flex: 1,
    padding: 30,
    alignItems: "center",
  },
  title: {
    color: colors.defaltwhite,
    fontWeight: "700",
    fontSize: 36,
    textAlign: "center",
  },
  subtitle: {
    color: colors.defaltwhite,
    textAlign: "center",
    marginTop: 30,
    fontSize: 18,
  },
  button: {
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: "100%",
  },
  butonText: {
    fontSize: 14,
    fontWeight: 600,
    color: colors.textblack,
  },
})
