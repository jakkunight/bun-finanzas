import { ComponentProps } from "react";

export default function Image(props: ComponentProps<"img">){
  return (
    <img className="w-full h-auto hover:saturate-150 hover:brightness-105" {...props} />
  );
}
