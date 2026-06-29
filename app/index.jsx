import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from 'expo-router'
import React from "react";
import Logo from '../assets/logo.png'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={{ marginBottom: 10, width: 150, height: 150, borderRadius: 15}}/>

      <Text style={styles.title}>
        Leafmark
      </Text>

      <Text style={{ marginTop: 10, marginBottom: 30 }}>
        A Reading List App
      </Text>

      <Link href="/about" style={styles.link}>About Page</Link>
      <Link href="/contact" style={styles.link}>Contact Page</Link>

    </View>
  );
};

export default Home;

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
});
