import { Text as RNText } from "react-native";
import { ComponentProps } from "react";

export default function Text({ children }: ComponentProps<typeof RNText>) {
  return (
    <RNText className="text-lg text-gray-900 dark:text-gray-400" >
      {children}
    </RNText>
  );
}
