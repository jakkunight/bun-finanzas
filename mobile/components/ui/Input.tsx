import { ComponentProps } from "react";
import { TextInput } from "react-native";
import Text from "./Text";

export default function Input(props: ComponentProps<typeof TextInput>) {
  return <TextInput className="text-neutral-900 dark:text-neutral-300 py-1 px-2 rounded-full border-2 border-emerald-500 dark:border-emerald-800" {...props} />
}

