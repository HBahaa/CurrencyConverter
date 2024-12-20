import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

export function ArrowDown(props: SvgProps) {
  return (
    <Svg
      width={800}
      height={800}
      viewBox="0 0 512.011 512.011"
      {...props}
    >
      <Path d="M505.755 123.592c-8.341-8.341-21.824-8.341-30.165 0L256.005 343.176 36.421 123.592c-8.341-8.341-21.824-8.341-30.165 0s-8.341 21.824 0 30.165l234.667 234.667a21.275 21.275 0 0 0 15.083 6.251 21.275 21.275 0 0 0 15.083-6.251l234.667-234.667c8.34-8.341 8.34-21.824-.001-30.165z" />
    </Svg>
  );
}