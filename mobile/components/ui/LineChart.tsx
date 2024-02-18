import { LineChart as LC } from "react-native-gifted-charts";
import { ComponentProps } from "react";
import { View } from "react-native";
import Heading from "./Heading";

export type DataObject = Pick<ComponentProps<typeof LC>, "data">;

export default function LineChart({
  title,
  data,
  ...props
}: ComponentProps<typeof LC> & { title: string }) {
  return (
    <View>
      <Heading>
        {title}
      </Heading>
      <LC 
        data={data}
        isAnimated={true}
        {...props} 
      />
    </View>
  );
}

