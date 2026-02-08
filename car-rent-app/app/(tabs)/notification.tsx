import { useEffect, useState } from "react";
import { Text, View } from "react-native";
type DataItem = {
  id: number;
  title: string;
  body: string;
};
export default function Notofication() {
  const [data, setData] = useState<DataItem[]>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }
    getData();
  }, []);

  return (
    <View>
      {data.map((item) => (
        <View key={item.id} className="border-2 border-gray-300 rounded-lg p-4 m-2">
          <Text className="font-bold text-lg">{item.title}</Text>
          <Text className="text-gray-600">{item.body}</Text>
        </View>
      ))}
    </View>);
}