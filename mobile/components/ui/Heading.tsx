import { Text } from "react-native";
import { ComponentProps } from "react";

export default function Heading({ children }: ComponentProps<typeof Text>) {
  return (
    <Text className="text-2xl font-bold text-gray-900 dark:text-gray-300" >
      {children}
    </Text>
  );
}
