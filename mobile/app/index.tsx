import { ScrollView } from "react-native";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import LineChart from "@/components/ui/LineChart";
import MOCK_DATA from "../MOCK_DATA.json";

export default function App() {

  return (
    <ScrollView>
      <LineChart data={MOCK_DATA} title="Gastos" />
      <Input />
      <Button>
        Press me
      </Button>
    </ScrollView>
  )
}

