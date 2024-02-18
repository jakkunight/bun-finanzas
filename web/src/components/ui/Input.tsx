import { ComponentProps } from "react";

export default function Input(props: ComponentProps<"input">){
  return (
    <input className="h-auto w-fit rounded-lg p-2 border-2 border-green-900 bg-white text-black hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white dark:bg-black dark:border-green-400 placeholder:text-gray-500 dark:placeholder:text-gray-400" {...props} />
  );
}
