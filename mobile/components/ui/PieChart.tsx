// TODO:
// Add support for legend rendering by color.

import { PieChart as PC } from "react-native-gifted-charts";
import { View, useColorScheme, Appearance } from "react-native";
import Heading from "./Heading";
import Text from "./Text";
import { ComponentProps, useState } from "react";

function renderDot(color:string){
  return <View
    className={`bg-[${color}] aspect-square h-4 rounded-full`}
  />;
}

export default function PieChart({
  color,
  darkColor,
  data,
  title
}: ComponentProps<typeof PC> & { title: string; color:string; darkColor?:string; }){
  const [chartColor, setChartColor] = useState<string>(color);
  
  Appearance.addChangeListener(({
    colorScheme
  }) => {
      if(colorScheme === "dark"){
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
      <View>
        <PC
        data={data}
        textColor={chartColor}
      />
        <View className="flex">
          {
            data.map((item, it) => {
              return (
              <View key={it} className="flex flex-row flex-nowrap items-center space-x-4">
                  {renderDot(chartColor)}
                  <Text>
                    {item.text}
                  </Text>
                </View>
              );
            })
          }
        </View>
      </View>
    </View>
  );
}

