import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const Contact = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Contact Page</Text>

      <Link href="/" style={styles.link}>Back Home</Link>

    </View>  
  )
}

export default Contact

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