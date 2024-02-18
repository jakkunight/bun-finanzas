import { Pressable } from "react-native";
import { ComponentProps } from "react";
import Text from "./Text";

export default function Button({children, ...props}: ComponentProps<typeof Pressable>){
  return (
  <Pressable className="w-fit h-auto p-1 rounded-full flex flex-nowrap items-center justify-center bg-emerald-500 dark:bg-emerald-800" {...props} >
      <Text>
        {children}
      </Text>
    </Pressable>
  );
}

