import {
  Text,
  View,
  Pressable,
  TextInput,
} from "react-native";
import { useState } from "react";
import { useLocalSearchParams, router } from "expo-router";
import { addJob, updateJob } from "@/scripts/database";
import { useSQLiteContext } from "expo-sqlite";

export default function AddTask() {
  const { name, job } = useLocalSearchParams();
  const jobPut = job ? JSON.parse(job as string) : null;
  const [jobName, setJobName] = useState(jobPut ? jobPut.job : "");
  const db = useSQLiteContext();
  
  const handleSave = async () => {
    if (jobPut) {
      await updateJob(db, jobName, jobPut.id);
    } else {
      await addJob(db, jobName);
    }
    router.back();
  };

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
          <Text>Hi {name}</Text>
          <Text>Have a great day ahead</Text>
        </View>
        <Pressable onPress={() => router.back()}>
          <Text>⬅️</Text>
        </Pressable>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          {jobPut ? "UPDATE YOUR JOB" : "ADD YOUR JOB"}
        </Text>
        <TextInput
          style={{
            width: "85%",
            borderWidth: 1,
            borderRadius: 20,
            height: 50,
            paddingHorizontal: 20,
          }}
          value={jobName}
          onChangeText={setJobName}
          placeholder="Input your job"
        />
        <Pressable
          onPress={handleSave}
          style={{ padding: 20, borderRadius: 50, backgroundColor: "#2DDDDE" }}
        >
          <Text style={{ color: "white" }}>Finish ➡️</Text>
        </Pressable>
      </View>
    </View>
  );
}