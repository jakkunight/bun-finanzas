import { ScrollView } from "react-native";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import LineChart from "@/components/ui/LineChart";
import PieChart from "@/components/ui/PieChart";
import MOCK_DATA from "../MOCK_DATA.json";
import MOCK_DATA_PIE from "../MOCK_DATA_PIE.json";

export default function App() {

  return (
    <ScrollView className="flex flex-col gap-2 px-2" >
      <LineChart data={MOCK_DATA} title="Gastos" color="#155e75" darkColor="#22d3ee" />
      <PieChart 
        color="#155e75"
        darkColor="#22d3ee"
        title="Ingresos"
        data={MOCK_DATA_PIE}
      />
      <Input />
      <Button>
        Press me
      </Button>
    </ScrollView>
  )
}

