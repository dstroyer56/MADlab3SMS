import {Link, Tabs} from "expo-router";
import React from "react";
import { StyleSheet, View, Button, Text, Pressable } from "react-native";


export default function ContactScreen(){

    return (

        <Link href="/(tabs)" asChild>
            <Button title = "Index (Back)"></Button>
        </Link>
    )


}

const style = StyleSheet.create({

    container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 40
    },
});