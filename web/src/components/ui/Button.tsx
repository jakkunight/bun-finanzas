import { ComponentProps } from "react";

export default function Button({ children, ...props }: ComponentProps<"button">) {
  return (
    <button className="w-fit h-auto p-2 rounded-lg border-green-900 border-2 bg-white dark:bg-black hover:bg-green-800 text-black hover:text-white dark:text-white dark:hover:bg-green-900 dark:border-green-400" {...props} >
      {children}
    </button>
  );
}
