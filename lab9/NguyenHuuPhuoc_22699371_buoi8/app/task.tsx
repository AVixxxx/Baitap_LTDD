import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  FlatList,
} from "react-native";

import { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useLocalSearchParams, router } from "expo-router";
import { getJobs } from "@/scripts/database";
import { useSQLiteContext } from "expo-sqlite";

const Task = () => {
  const db = useSQLiteContext();
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const { name } = useLocalSearchParams();

  useFocusEffect(
    useCallback(() => {
      const fetchJobs = async () => {
        const jobs = await getJobs(db);
        setData(jobs as any);
      };

      fetchJobs();
    }, [])
  );

  const filteredData = data.filter((x) => x.job.includes(search));
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <View>
          <Pressable onPress={() => router.back()}>
            <Text>⬅️</Text>
          </Pressable>
        </View>
        <View>
          <Text>Hi {name}</Text>
          <Text>Have agrate day a head</Text>
        </View>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TextInput
          value={search}
          onChangeText={setSearch}
          style={{
            width: "85%",
            borderWidth: 1,
            borderRadius: 20,
            height: 50,
            paddingHorizontal: 20,
          }}
          placeholder="Search"
        />
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 20,
                alignItems: "center",
              }}
            >
              <Text> ✅ {item.job}</Text>
              <Pressable
                onPress={() =>
                  router.push({
                    pathname: "/addtask",
                    params: { job: JSON.stringify(item), name },
                  })
                }
                style={{
                  borderColor: "red",
                  borderWidth: 1,
                  borderRadius: 10,
                  padding: 10,
                }}
              >
                <Text style={{ color: "red" }}>Edit</Text>
              </Pressable>
            </View>
          )}
        />
        <Pressable
          onPress={() =>
            router.push({ pathname: "/addtask", params: { name } })
          }
          style={{ padding: 20, borderRadius: 50, backgroundColor: "#2DDDDE" }}
        >
          <Text style={{ color: "white" }}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Task;