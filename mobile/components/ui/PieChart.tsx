import { PieChart as PC } from "react-native-chart-kit";
import { ComponentProps, useState } from "react";
import { View, Dimensions } from "react-native";
import Heading from "./Heading";

export type PieChartData = Pick<ComponentProps<typeof PC>, "data">;
export type PieChartConfig = Pick<ComponentProps<typeof PC>, "chartConfig">;

export default function PieChart({
  title,
  data,
  accessor,
  chartConfig,
  ...props }: ComponentProps<typeof PC> & { title: string; }) {
  const [chartWidth, setChartWidth] = useState<number>(Dimensions.get("screen").width * 95 / 100);
  Dimensions.addEventListener(
    "change", ({ screen }) => {
      setChartWidth(screen.width * 95 / 100);
    });

  return (
    <View className="flex flex-col gap-2 p-2 w-full h-auto justify-start" >
      <Heading>
        {title}
      </Heading>
      <PC
        data={data}
        chartConfig={chartConfig}
        accessor={accessor}
        {...props}
        width={chartWidth}
        height={chartWidth * 16 / 9}
        fromZero
        backgroundColor={"transparent"}
      />
    </View>
  );
}

