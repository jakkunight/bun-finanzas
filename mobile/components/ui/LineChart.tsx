import { LineChart as LC } from "react-native-gifted-charts";
import { ComponentProps,  useState } from "react";
import { View, Appearance } from "react-native";
import Heading from "./Heading";

export type DataObject = Pick<ComponentProps<typeof LC>, "data">;

export default function LineChart({
  title,
  data,
  color,
  darkColor,
  ...props
}: ComponentProps<typeof LC> & { title: string; color: string; darkColor?: string; }) {

  const [chartColor, setChartColor] = useState<string>(color);

  Appearance.addChangeListener(({
    colorScheme
  }) => {
    if (colorScheme === "dark") {
      setChartColor(darkColor || color);
      return;
    }
    setChartColor(color);
  })

  return (
    <View>
      <Heading>
        {title}
      </Heading>
      <LC
        data={data}
        color={chartColor}
        xAxisColor={chartColor}
        yAxisColor={chartColor}
        isAnimated={true}
        hideRules={true}
        dataPointsColor={chartColor}
        yAxisTextStyle={{
          color: chartColor
        }}
        xAxisLabelTextStyle={{
          color: chartColor
        }}
        {...props}
      />
    </View>
  );
}

