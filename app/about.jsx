import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const About = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>About Us</Text>

      <Link href="/" style={styles.link}>Back Home</Link>

    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ededed",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  link : {
    marginVertical : 10,
    borderBottomWidth : 1
  }
})