import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function Index() {
  const [name, setName] = useState("");
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
        <Image source={require("@/assets/images/background.png")} />
        <Text
          style={{
            color: "purple",
            fontWeight: "bold",
            fontSize: 30,
            width: 250,
            textAlign: "center",
          }}
        >
          MANAGE YOUR TASK
        </Text>
      </View>
      <View style={{ flex: 2, alignItems: "center" }}>
        <TextInput
          style={{
            borderRadius: 20,
            color: "gray",
            borderWidth: 1,
            height: 40,
            width: 350,
            paddingHorizontal: 20,
          }}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />
        <Pressable
          onPress={() => router.push({ pathname: "/task", params: { name } })}
          style={{
            marginTop: 150,
            backgroundColor: "#2DDDDE",
            padding: 15,
            borderRadius: 20,
          }}
        >
          <Text style={{ color: "white" }}>GET STARTED {`->`} </Text>
        </Pressable>
      </View>
    </View>
  );
}
