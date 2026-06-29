import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from 'expo-router'
import React from "react";
import Logo from '../assets/logo.png'

// themed components
import ThemedView from "../components/ThemedView";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {
  return (
    <ThemedView style={[styles.container]}>
      <Image source={Logo} style={{ marginBottom: 10, width: 150, height: 150, borderRadius: 15}}/>
      <Spacer />

      <ThemedText style={styles.title} title={true}>Leafmark</ThemedText>

      <ThemedText style={{ marginTop: 10, marginBottom: 30 }}>
        A Reading List App
      </ThemedText>

      <Link href="/login" style={styles.link}>
        <ThemedText>Login Page</ThemedText>
      </Link>

      <Link href="/register" style={styles.link}>
        <ThemedText>Register Page</ThemedText>
      </Link>

      <Link href="/profile" style={styles.link}>
        <ThemedText>Profile Page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
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
